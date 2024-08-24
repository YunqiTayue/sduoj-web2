import React from "react";
import {withTranslation} from "react-i18next";
import ItemTitle from "../../common/Form/Item/ItemTitle";
import ItemText from "../../common/Form/Item/ItemText";
import {Form, Input, Radio} from "antd";
import ItemTimeRange from "../../common/Form/Item/ItemTimeRange";
import ItemSelectGroup from "../../group/Form/Item/ItemSelectGroup";

const SignFormProfile = (props: any) => {

    return (
        <>
            <ItemTitle/>
            <ItemSelectGroup name={"m_group_id"} label={"管理组"} formName={"ContestForm"} required/>
            <ItemSelectGroup name={"group_id"} label={"用户组"}
                             tooltip={"参赛组中的参赛者不需要输入密码"} formName={"ContestForm"} required/>
            <Form.Item name="mode" label={"签到模式"} required>
                <Radio.Group>
                    <Radio value={0}>考勤模式</Radio>
                    <Radio value={1}>考试模式A</Radio>
                    <Radio value={2}>考试模式B</Radio>
                    <Radio value={3}>信息输入模式</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item name="seat_bind" label={"是否指定座位"} required>
                <Radio.Group>
                    <Radio value={0}>是</Radio>
                    <Radio value={1}>否</Radio>
                </Radio.Group>
            </Form.Item>
            <ItemTimeRange label={"签到起止时间"} required={true}/>
            <Form.Item name="usl_id" label={"名单"}>
                <Input />
            </Form.Item>
        </>
    )
}

export default withTranslation()(SignFormProfile)