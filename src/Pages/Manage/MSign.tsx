import React, {Component, Dispatch} from "react";
import {withRouter} from "react-router";
import {Card, Space} from "antd";
import mApi from "../../Utils/API/m-api_test";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import TableWithPagination from "../../Component/common/Table/TableWithPagination";
import ModalFormUseForm from "../../Component/common/Form/ModalFormUseForm";
import SignFormProfile from "../../Component/sign/Form/SignFormProfile";
import CheckConfirm from "../../Component/sign/Form/Item/CheckConfirm";
import SignStatusInquiry from "../../Component/sign/SignStatusInquiry";
import {TableState} from "../../Type/ITable";



class MSign extends Component<any, any> {
    getModeText(mode:number):string{
        const modeMap:{[key:number]:string}={
            0:"考勤模式",
            1:"考试模式A",
            2:"考试模式B",
            3:"信息输入模式"
        };
        return modeMap[mode];
    }

    getSeatBindText(ifSeatBind:number):string{
        const seatBindMap:{[key:number]:string}={
            0:"否",
            1:"是"
        }
        return seatBindMap[ifSeatBind];
    }

    render() {
        let colData: any[] = [
            {
                title: "ID",
                dataIndex: "sg_id",
                width: 100,
                responsive: ["lg", "sm", "xs"]
            },
            {
              title:"标题",
              dataIndex: "title",
              width: "auto",
              responsive: ["lg", "sm", "xs"]
            },
            {
                title: "签到模式",
                dataIndex: "mode",
                width: "auto",
                responsive: ["lg", "sm", "xs"],
                render:(text:any)=>this.getModeText(text)
            },
            {
                title: "用户组ID",
                dataIndex: "group_id",
                width: "auto",
                responsive: ["lg", "sm", "xs"]
            },
            {
                title: "管理组ID",
                dataIndex: "m_group_id",
                width: "auto",
                responsive: ["lg", "sm", "xs"]
            },
            {
                title: "开始时间",
                dataIndex: "gmtStart",
                width: "auto",
                responsive: ["lg", "sm", "xs"]
            },
            {
                title: "结束时间",
                dataIndex: "gmtEnd",
                width: "auto",
                responsive: ["lg", "sm", "xs"]
            },
            {
                title: "是否指定座位",
                dataIndex: "seat_bind",
                width: "auto",
                responsive: ["lg", "sm", "xs"],
                render:(ifSeatBind:any)=>this.getSeatBindText(ifSeatBind)
            },
            {
                title:this.props.t("operator"),
                width: "auto",
                render:(text:any,rows:any)=>{
                    return(
                        <Space>
                            <ModalFormUseForm
                                TableName={"signList"}
                                width={500}
                                title={rows.title}
                                type={"update"}
                                subForm={[
                                    {component: <SignFormProfile/>}
                                ]}
                                dataLoader={async () => mApi.getSignInfo({sg_id: rows.sg_id})}
                                updateAppendProps={{sg_Id: rows.sg_id}}
                                dataSubmitter={(value: any) => {
                                    return mApi.editSign(value)
                                }}
                            />
                            <ModalFormUseForm
                                TableName={"signList"}
                                width={500}
                                title={"新建签到（克隆自"+rows.title+")"}
                                type={"fork"}
                                subForm={[
                                    {component: <SignFormProfile/>}
                                ]}
                                dataLoader={async () => mApi.getSignInfo({sg_id: rows.sg_id})}
                                updateAppendProps={{sg_Id: rows.sg_id}}
                                dataSubmitter={(value: any) => {
                                    return mApi.createSign(value)
                                }}
                            />
                            <CheckConfirm
                                btnName={"请假审核"}
                                btnType={"link"}
                                width={1200}
                                title={"Members in " + rows.title + "(Sign ID:" + rows.sg_id + ")"}
                                initData={rows}
                                sg_id={rows.sg_id}
                            />
                            <SignStatusInquiry
                                btnName={"签到情况"}
                                btnType={"link"}
                                width={1000}
                                title={"Members in " + rows.title + "(Sign ID:" + rows.sg_id + ")"}
                                initData={rows}
                                sg_id={rows.sg_id}
                            />
                        </Space>
                    )
                }

            }
        ];
        return (
            <div style={{ marginTop: -20, overflow: "hidden" }}>
                <Card
                    size={"small"}
                    bordered={true}
                    title={"签到列表"}
                    extra={
                        <Space>
                            <ModalFormUseForm
                                TableName={"SignList"}
                                width={1200}
                                title={"新建签到"}
                                type={"create"}
                                subForm={[
                                    {component: <SignFormProfile/>, label: ""}
                                ]}
                                dataSubmitter={(value: any) => {
                                    return mApi.createSign(value)
                                }}
                            />
                        </Space>
                    }
                >
                    <TableWithPagination
                        name={"SignList"}
                        search={true}
                        columns={colData}
                        disableSelection={true}
                        API={mApi.getSignList}
                        size={"small"}
                        rowKey={"sg_id"}
                    />
                </Card>
            </div>
        );
    }
}

// const mapStateToProps = (state: any) => {
//     // const UState: UserState = state.UserReducer;
//     // return {
//     //     roles: UState.userInfo?.roles
//     // };
// };
//
// const mapDispatchToProps = () => ({});
const mapStateToProps = (state: any) => {
    const TState: TableState = state.TableReduce
    return {
        tableData: TState.tableData
    }

}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    setSelectedRowKeys: (data: React.Key[], name: string) =>
        dispatch({type: "setSelectedRowKeys", data: data, name: name}),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    withTranslation()(
        withRouter(MSign)
    )
);
