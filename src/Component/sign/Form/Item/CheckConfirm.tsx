import React, {Dispatch, useEffect, useState} from "react";
import {connect} from "react-redux";
import {withTranslation} from "react-i18next";
import {withRouter} from "react-router";
import MApi from "../../../../Utils/API/m-api_test";
import {Button, Modal, Space, Table, Image} from "antd";
import {ColumnsType} from "antd/es/table";

interface DataType {
    sg_u_id: number;
    user_name: string;
    seat_id: number;
    sg_user_message: string;
}

const CheckConfirm = (props: any) => {
    const [initData, setInitData] = useState<any[]>(props.initData);
    const [leaveApprovedData, setLeaveApprovedData] = useState<any[]>([]);
    const [leaveApprovalPendingData, setleaveApprovalPendingData] = useState<any[]>([]);
    const [vis, setVis] = useState<boolean>(false);
    const [modalImage, setModalImage] = useState<string | null>(null);  // 用于弹窗展示的图片

    const updateTable = () => {
        props.addTableVersion("LeaveList");
    };

    const updateData = (data: any) => {
        setInitData(data);
        setLeaveApprovedData(data.filter((v: any) => v.sg_absence_pass === 1));
        setleaveApprovalPendingData(data.filter((v: any) => v.sg_absence_pass === null || v.sg_absence_pass === ""));
    };

    const getLeaveDetail = () => {
        MApi.getSignUserList({sg_id: props.sg_id}).then((data: any) => {
            const filteredData = data.filter((item: any) => item.sg_user_message !== null
                && item.sg_user_message !== "");
            updateData(filteredData);
        }).catch(() => {
            console.log("error");
        });
    };

    const setAbsencePass = (data: any, sg_absence_pass: number) => {
        let d = {
            "sg_u_id": data.sg_u_id,
            "sg_absence_pass": sg_absence_pass
        };
        MApi.updateSignUserCheck(d).then(() => {
            initData.map((v: any) => {
                data.forEach((d: any) => {
                    v.sg_absence_pass = v.sg_u_id === d.sg_u_id ? sg_absence_pass : v.sg_absence_pass;
                });
                return undefined;
            });
            let changeData = initData.filter((v: any) => v.sg_absence_pass === 1
                || v.sg_absence_pass === null || v.sg_absence_pass === "");
            setInitData(changeData);
            setLeaveApprovedData(initData.filter((v: any) => v.sg_absence_pass === 1));
            setleaveApprovalPendingData(initData.filter((v: any) => v.sg_absence_pass === null
                || v.sg_absence_pass === ""));
            updateTable();
        }).catch(() => {
            console.log("error in set absence pass");
        });
    };

    useEffect(() => {
        if (props.sg_id !== undefined && vis) {
            getLeaveDetail();
        }
    }, [props.sg_id, vis]);

    const columnsBase: ColumnsType<DataType> = [
        {
            title: 'ID',
            dataIndex: 'sg_u_id',
            width: 70,
        },
        {
            title: props.t("username"),
            dataIndex: 'username',
            width: "auto",
        },
        {
            title: props.t("seat_id"),
            dataIndex: 'seat_id',
            width: "auto",
        },
        {
            title: props.t("signUserMessage"),
            dataIndex: 'sg_user_message',
            width: "auto",
            render: (text: any) => {
                if (text) {
                    return (
                        (!modalImage ?
                            <Image
                                width={100}
                                src={text}  // 直接使用 Base64 编码的图片数据
                                onClick={() => setModalImage(text)} // 点击图片时展示弹窗
                            /> :
                            <Modal
                                visible={!!modalImage} // 仅当 modalImage 存在时显示弹窗
                                footer={null}
                                onCancel={() => setModalImage(null)} // 点击关闭时清除 modalImage
                            >
                                <Image
                                    src={modalImage || ""}
                                    alt="Preview"
                                    style={{width: '100%'}}
                                />
                            </Modal>)
                    );
                } else {
                    return text;
                }
            },
        }
    ];

    const ApprovalPendingColumns: ColumnsType<DataType> = [
        ...columnsBase,
        {
            title: props.t("operator"),
            width: "150px",
            render: (text: any, rows: any) => {
                return (
                    <Space>
                        <Button type="link" size={"small"} onClick={() => setAbsencePass([rows], 1)}>同意</Button>
                        <Button type="link" size={"small"} onClick={() => setAbsencePass([rows], 2)}>拒绝</Button>
                    </Space>
                );
            }
        }
    ];

    return (
        <>
            <Button type={props.btnType} size={"small"} onClick={() => {
                setVis(true);
            }}>
                {props.btnName}
            </Button>
            <Modal
                visible={vis}
                destroyOnClose={true}
                title={props.title}
                width={1200}
                onCancel={() => {
                    setVis(false);
                }}
                footer={false}
            >
                <Space wrap>
                    <div>待审核用户({leaveApprovalPendingData !== undefined ? leaveApprovalPendingData.length : 0})</div>
                    <Table
                        size={"small"}
                        columns={ApprovalPendingColumns}
                        dataSource={leaveApprovalPendingData}
                        pagination={false}
                        scroll={{y: 240}}
                    />
                    <div>审核通过用户({leaveApprovedData !== undefined ? leaveApprovedData.length : 0})</div>
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
    );
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
        withRouter(CheckConfirm)
    )
);
