import React, {Component, Dispatch} from "react";
import {withRouter} from "react-router";
import {UserState} from "../../Type/Iuser";
import {Card, Space} from "antd";
import MApi from "../../Utils/API/m-api";
import mApi from "../../Utils/API/m-api";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {unix2Time} from "../../Utils/Time";
import TableWithPagination from "../../Component/common/Table/TableWithPagination";
import ModalFormUseForm from "../../Component/common/Form/ModalFormUseForm";
import GroupFormProfile from "../../Component/group/Form/Item/GroupFormProfile";
import GroupMember from "../../Component/group/GroupMember";


class MSign extends Component<any, any> {
    render() {
        let colData: any[] = [
            {
                title: "ID",
                dataIndex: "sgId",
                width: 100,
                responsive: ["lg", "sm", "xs"]
            },
            {
                title: "签到模式",
                dataIndex: "mode",
                width: "auto",
                responsive: ["lg", "sm", "xs"]
            },
            {
                title: "用户组ID",
                dataIndex: "groupID",
                width: "auto",
                responsive: ["lg", "sm", "xs"]
            },
            {
                title: "管理组ID",
                dataIndex: "mGroupID",
                width: "auto",
                responsive: ["lg", "sm", "xs"]
            },
            {
                title: "开始时间",
                dataIndex: "startTime",
                width: "auto",
                responsive: ["lg", "sm", "xs"]
            },
            {
                title: "结束时间",
                dataIndex: "endTime",
                width: "auto",
                responsive: ["lg", "sm", "xs"]
            },
            {
                title: "是否指定座位",
                dataIndex: "seatBind",
                width: "auto",
                responsive: ["lg", "sm", "xs"]
            },
            {
                title: "签到标签",
                dataIndex: "title",
                width: "auto",
                responsive: ["lg", "sm", "xs"]
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

                        </Space>
                    }
                >
                    <TableWithPagination
                        name={"GroupList"}
                        columns={colData}
                        disableSelection={true}
                        API={MApi.getGroupList}
                        size={"small"}
                        rowKey={"groupId"}
                    />
                </Card>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    const UState: UserState = state.UserReducer;
    return {
        roles: UState.userInfo?.roles
    };
};

const mapDispatchToProps = () => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    withTranslation()(
        withRouter(MSign)
    )
);
