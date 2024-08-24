import cApi from "../../Utils/API/c-api_test";
import {Space, Button,Card} from "antd";
import moment from "moment";
import React, {useEffect, useState} from "react";
import {withRouter} from "react-router-dom";
import {withTranslation} from "react-i18next";
import TableWithPagination from "../common/Table/TableWithPagination";
import ModalFormUseForm from "../common/Form/ModalFormUseForm";
import LeaveApplication from "./Form/Item/leaveapplication";


const PersonalSignList = (props: any) => {
    // const [mySign, setMySign] = useState<any>(undefined)

    // let data = {
    //     "groupId": props.groupId,
    //     "username": props.username,
    // }
    const [ip,setIp]=useState('');
    const currentTime = moment();
    const getModeText=(mode:number):string=>{
        const modeMap:{[key:number]:string}={
            0:"考勤模式",
            1:"考试模式A",
            2:"考试模式B",
            3:"信息输入模式"
        };
        return modeMap[mode];
    }

    useEffect(() => {
        fetch('https://api.ipify.org?format=json')
            .then(response=>response.json())
            .then(data=>setIp(String(data.ip)))
            .catch(error => console.error('Error fetching IP:', error));
    }, []);

    let colData: any[] = [
        {
            title: "用户签到ID",
            dataIndex: "sg_u_id",
            width: 300,
            responsive: ["lg", "sm", "xs"]
        },
        {
            title: "签到ID",
            dataIndex: "sg_id",
            width: "auto",
            responsive: ["lg", "sm", "xs"]
        },
        {
            title: "签到模式",
            dataIndex: "mode",
            width: "auto",
            responsive: ["lg", "sm", "xs"],
            render:(text:any)=>getModeText(text)
        },
        {
            title: "开始时间",
            dataIndex: "gmtStart",
            width: "auto",
            responsive: ["lg", "sm", "xs"],
            render: (timestamp: number) => moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
        },
        {
            title: "结束时间",
            dataIndex: "gmtEnd",
            width: "auto",
            responsive: ["lg", "sm", "xs"],
            render: (timestamp: number) => moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
        },
        {
            title: "签到时间",
            dataIndex: "sg_time",
            width: "auto",
            responsive: ["lg", "sm", "xs"],
            render: (sg_time: string | null) => {
                if (sg_time === "00-00-00 00:00:00" || sg_time === null) {
                    return null; // 不显示内容
                }
                return sg_time; // 正常显示时间
            }
        },
        {
            title: "座位号",
            dataIndex: "seat_id",
            width: "auto",
            responsive: ["lg", "sm", "xs"]
        },
        {
            title: "请假信息",
            dataIndex: "sg_user_message",
            width: "auto",
            responsive: ["lg", "sm", "xs"]
        },
        {
            title: "是否通过审批",
            dataIndex: "sg_absence_pass",
            width: "auto",
            responsive: ["lg", "sm", "xs"]
        },
        {
            title: props.t("operator"),
            width: "auto",
            render: (rows: any) => {
                const isCheckinTime=()=>{
                    const gmtStart=moment(rows.gmtStart,'YYYY-MM-DD HH:mm:ss')
                    const gmtEnd=moment(rows.gmtEnd,'YYYY-MM-DD HH:mm:ss')
                    return currentTime.isBetween(gmtStart,gmtEnd)
                }
                return (
                    <Space>
                        <Button
                            type="primary"
                            disabled={!isCheckinTime()||(rows.mode!==0)}
                            onClick={() => cApi.userCheckin({ username: props.username, sg_id: rows.sg_id, seat_id: ip})}
                        >
                            签到
                        </Button>
                        <ModalFormUseForm
                            TableName={"请假申请"}
                            width={600}
                            btnType={"link"}
                            btnProps={{size: "small"}}
                            btnIcon={false}
                            btnName={"请假"}
                            title={"请假申请"}
                            type={"create"}
                            subForm={[
                                {
                                    component: <>
                                        <LeaveApplication
                                            label={"提交文件"}
                                            name={"file_id"}
                                            filenameKey={"file_name"}
                                            required={false}
                                            accept={".jpg,.png"}
                                            max_size={50}
                                            sg_u_id={rows.sg_u_id}
                                        />
                                    </>
                                }
                            ]}
                            updateAppendProps={{sg_u_id: rows.sg_u_id}}
                            dataSubmitter={(value: any) => {
                                return cApi.editUserSign({sg_u_id: rows.sg_u_id})
                            }}
                        />
                    </Space>

                )
            }
        }
    ]

    return (
            <Card className={"SignListPage"}>
                <TableWithPagination
                    name={props.t("signList")}
                    API={(params: any) =>
                        cApi.getUserSignList({
                            ...params,
                            group_id: props.groupId,
                            username: props.username
                        })
                    }
                    columns={colData}
                    disableSelection={true}
                    size={"small"}
                    rowKey={"sg_u_id"}
                />
            </Card>
    )
}

export default withTranslation()(withRouter(PersonalSignList))
