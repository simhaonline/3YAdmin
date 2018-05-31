import React from 'react';
import { Card, Icon, Avatar, Row, Col } from 'antd';
const { Meta } = Card;

class Menu extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs={24} sm={24} md={12} lg={8} xl={6}>
                        <Card
                            style={{ width: 300 }}
                            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                            actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                        >
                            <Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title="Card title"
                                description="This is the description"
                            />
                        </Card>

                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} xl={6}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta
                                title="Europe Street beat"
                                description="www.instagram.com"
                            />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} xl={6}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta
                                title="Europe Street beat"
                                description="www.instagram.com"
                            />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} xl={6}>
                        <Card
                            style={{ width: 300 }}
                            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                            actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                        >
                            <Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title="Card title"
                                description="This is the description"
                            />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} sm={24} md={12} lg={8} xl={6}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta
                                title="Europe Street beat"
                                description="www.instagram.com"
                            />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} xl={6}>
                        <Card
                            style={{ width: 300 }}
                            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                            actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                        >
                            <Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title="Card title"
                                description="This is the description"
                            />
                        </Card>

                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} xl={6}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta
                                title="Europe Street beat"
                                description="www.instagram.com"
                            />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} xl={6}>
                        <Card
                            style={{ width: 300 }}
                            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                            actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                        >
                            <Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title="Card title"
                                description="This is the description"
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Menu;