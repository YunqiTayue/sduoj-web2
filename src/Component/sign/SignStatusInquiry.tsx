import React, {Dispatch, useEffect, useRef, useState} from "react";
import {connect} from "react-redux";
import {withTranslation} from "react-i18next";
import {withRouter} from "react-router";
import MApi from "../../Utils/API/m-api_test";
import {Button, Input, message, Modal, Space, Table} from "antd";
import {ColumnsType} from "antd/es/table";
import TableWithPagination from "../common/Table/TableWithPagination";

interface DataType{
    //学生签到id
    sg_u_id:number;
    //学生姓名
    user_name:string;
    //签到时间
    sg_time:string;
    //座位号
    seat_id:number;
}

const SignStatusInquiry=(props:any)=>{
    //组件初始化数据
    const [initData,setInitData]=useState<any[]>(props.initData)
    //未签到且未请假或请假未通过成员数据
    const [unsignedData,setUnsignedData]=useState<any[]>([])
    //已签到成员数据
    const [signedData,setSignedData]=useState<any[]>([])
    //请假成员数据
    const [leaveApprovedData,setLeaveApprovedData]=useState<any[]>([])
    const [vis, setVis] = useState<boolean>(false)

    const updateTable = () => {
        props.addTableVersion("SignList")
    }

    const updateData=(data:any)=>{
        setInitData(data)
        setUnsignedData(initData.filter((v:any)=>(v.sg_time==="00-00-00 00:00:00"||v.sg_time===null)&&v.sg_absence_pass!==1))
        setSignedData(initData.filter((v:any)=>v.sg_time!==null&&v.sg_time!=="00-00-00 00:00:00"))
        setLeaveApprovedData(initData.filter((v:any)=>v.sg_absence_pass===1))
    }

    const getSignDetail=()=>{
        MApi.getSignUserList({ sg_id: props.sg_id }).then((data: any) => {
            updateData(data);
        }).catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        if (props.sg_id !==undefined && vis) {
            getSignDetail()
        }
    }, [props.sg_id,vis]);

    const columnsBase:ColumnsType<DataType>=[
        {
            title:'ID',
            dataIndex:'sg_u_id',
            width: 70,
        },
        {
            title:props.t("username"),
            dataIndex:'username',
            width:"auto",
        },
        {
            title:props.t("signTime"),
            dataIndex:'sg_time',
            width:"auto",
        },
        {
            title:props.t("seatID"),
            dataIndex:'seat_id',
            width:"auto",
        },
    ]


    return(
        <>
            <Button type={props.btnType} size={"small"} onClick={() => {
                setVis(true)
            }}>
                {props.btnName}
            </Button>
            <Modal
                visible={vis}
                destroyOnClose={true}
                title={props.title}
                width={1200}
                onCancel={() => {
                    setVis(false)
                }}
                footer={false}
            >
                <Space wrap>
                    <div>未签到用户({unsignedData !== undefined ? unsignedData.length : 0})</div>
                    <Table
                        size={"small"}
                        columns={columnsBase}
                        dataSource={unsignedData}
                        pagination={false}
                        scroll={{y: 240}}
                    />
                    <div>已签到用户({signedData !== undefined ? signedData.length : 0})</div>
                    <Table
                        size={"small"}
                        columns={columnsBase}
                        dataSource={signedData}
                        pagination={false}
                        scroll={{y: 240}}
                    />
                    <div>请假用户({leaveApprovedData !== undefined ? leaveApprovedData.length : 0})</div>
                    <Table
                        size={"small"}
                        columns={columnsBase}
                        dataSource={leaveApprovedData}
                        pagination={false}
                        scroll={{y: 240}}
                    />
                </Space>
            </Modal>
        </>
    )
}

const mapStateToProps = (state: any) => {
    return {}
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    addTableVersion: (name: string) => dispatch({type: "addTableVersion", name: name}),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    withTranslation()(
        withRouter(SignStatusInquiry)
    ))
