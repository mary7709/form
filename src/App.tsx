import React from 'react';
import 'antd/dist/antd.css';
import {
  // Form,
  Select,
  InputNumber,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Rate,
  Checkbox,
  Row,
  Col,
  Table,
} from 'antd';
import { SmileOutlined } from '@ant-design/icons'
// import  {Form}  from "@ant-design/Form";
import  Form  from "antd/lib/form";

const { Option } = Select;
const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: true },
];

class Demo extends React.Component {
  // handleSubmit = (e: any) => {
  //     e.preventDefault();
  //     this.props.form.validateFields((err: any, values: any) => {
  //         if (!err) {
  //             console.log('Received values of form: ', values);
  //         }
  //     });
  // };
  onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  }
  normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  state = {
    value1: 'Apple',
    value2: 'Apple',
    value3: 'Apple',
  };
  onChange1 = (e: any) => {
    console.log('radio1 checked', e.target.value);
    this.setState({
      value1: e.target.value,
    });
  };

  onChange2 = (e: any) => {
    console.log('radio2 checked', e.target.value);
    this.setState({
      value2: e.target.value,
    });
  };

  onChange3 = (e: any) => {
    console.log('radio3 checked', e.target.value);
    this.setState({
      value3: e.target.value,
    });
  };
  render() {
    let columns = [
      {
        title: '地点',
        // dataIndex: 'user.age',
        dataIndex: ['user', 'age'],
        key: "location"
      },
      {
        title: '名字',
        // dataIndex: 'user.name',
        dataIndex: ['user', 'name'],
        key: "name"
      },
      {
        title: '地址',
        // dataIndex: 'user.pictureURL',
        dataIndex: ['user', 'pictureURL'],
        key: "pictureURL",
      },
      {
        title: '状态',
        // dataIndex: 'user.status',
        dataIndex: ['user', 'status'],
        key: "status",
      },
      {
        title: '推广',
        key: "platforms",
        // dataIndex: 'user.platforms',
        dataIndex: ['user', 'platforms'],
      },
      {
        title: '操作',
        key: "action",
        // dataIndex: 'user.id',
        dataIndex: ['user', 'id'],
      }
    ];
    // const { getFieldDecorator } = this.props.form;
    const { value1, value2, value3 } = this.state;

    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <>
        <Table
          key={1}
          columns={columns}
          
        />
        <Form {...formItemLayout} onFinish={this.onFinish} initialValues={
          {
            'input-number': 3,
            "checkbox-group": ['A', 'B'],
            "rate": 3.5
          }
        }  >
          <Form.Item label="互斥Radio" >
            <Radio.Group options={plainOptions} onChange={this.onChange1} value={value1} />
            <Radio.Group options={options} onChange={this.onChange2} value={value2} />
            <Radio.Group
              options={optionsWithDisabled}
              onChange={this.onChange3}
              value={value3}
            />
          </Form.Item>
          <Form.Item label="Plain Text">
            <span className="ant-form-text">China</span>
          </Form.Item>
          <Form.Item label="Select" hasFeedback name="select" rules={[{ required: true, message: 'Please select your country!' }]}>
            {/* {getFieldDecorator('select', {
                        rules: [{ required: true, message: 'Please select your country!' }],
                    })(
                        <Select placeholder="Please select a country">
                            <Option value="china">China</Option>
                            <Option value="usa">U.S.A</Option>
                        </Select>,
                    )} */}
            <Select placeholder="Please select a country">
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Select[multiple]" name="select-multiple" rules={[
            { required: true, message: 'Please select your favourite colors!', type: 'array' },
          ]}>
            {/* {getFieldDecorator('select-multiple', {
                        rules:
                        [
                            { required: true, message: 'Please select your favourite colors!', type: 'array' },
                        ],
                    })( */}
            {/* )} */}

            <Select mode="multiple" placeholder="Please select favourite colors">
              <Option value="red">Red</Option>
              <Option value="green">Green</Option>
              <Option value="blue">Blue</Option>
            </Select>,
                </Form.Item>

          <Form.Item label="InputNumber" name="input-number">
            {/* {getFieldDecorator('input-number', { initialValue: 3 })(<InputNumber min={1} max={10} />)} */}
            <InputNumber min={1} max={10} />
            <span className="ant-form-text"> machines</span>
          </Form.Item>

          <Form.Item label="Switch" name='switch' valuePropName='checked' >
            {/* {getFieldDecorator('switch', { valuePropName: 'checked' })(<Switch />)} */}
            <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
          </Form.Item>

          <Form.Item label="Slider" name="slider">
            {/* {getFieldDecorator('slider')(
                        <Slider
                        marks={{
                            0: "hi",
                            10: '大',
                            20: '家',
                            30: '都',
                            40: '说',
                            50: '马',
                            60: '俐',
                            70: '是',
                            80: '小',
                            90: '仙',
                            100: '女',
                          }}
                        />,
                    )} */}
            <Slider
              marks={{
                0: "hi",
                10: '大',
                20: '家',
                30: '都',
                40: '说',
                50: '马',
                60: '俐',
                70: '是',
                80: '小',
                90: '仙',
                100: '女',
              }}
            />,
                </Form.Item>

          <Form.Item label="Radio.Group" name="radio-group">
            {/* {getFieldDecorator('radio-group')(
                        <Radio.Group>
                            <Radio value="a">item 1</Radio>
                            <Radio value="b">item 2</Radio>
                            <Radio value="c">item 3</Radio>
                        </Radio.Group>,
                    )} */}
            <Radio.Group>
              <Radio value="a">item 1</Radio>
              <Radio value="b">item 2</Radio>
              <Radio value="c">item 3</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="Radio.Button" name="radio-button">
            {/* {getFieldDecorator('radio-button')(
                        <Radio.Group>
                            <Radio.Button value="a">item 1</Radio.Button>
                            <Radio.Button value="b">item 2</Radio.Button>
                            <Radio.Button value="c">item 3</Radio.Button>
                        </Radio.Group>,
                    )} */}
            <Radio.Group>
              <Radio.Button value="a">item 1</Radio.Button>
              <Radio.Button value="b">item 2</Radio.Button>
              <Radio.Button value="c">item 3</Radio.Button>
            </Radio.Group>,
                </Form.Item>

          <Form.Item label="Checkbox.Group" name="checkbox-group">
            {/* {getFieldDecorator('checkbox-group', {
                        initialValue: ['A', 'B'],
                    })(
                        <Checkbox.Group style={{ width: '100%' }}>
                            <Row>
                                <Col span={8}>
                                    <Checkbox value="A">A</Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox disabled value="B">
                                        B
                    </Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="C">C</Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="D">D</Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="E">E</Checkbox>
                                </Col>
                            </Row>
                        </Checkbox.Group>,
                    )} */}
            <Checkbox.Group style={{ width: '100%' }}>
              <Row>
                <Col span={8}>
                  <Checkbox value="A">A</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox disabled value="B">
                    B
                    </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="C">C</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="D">D</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="E">E</Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </Form.Item>

          <Form.Item label="Rate" name="rate">
            {/* {getFieldDecorator('rate', {
                        initialValue: 3.5,
                    })(<Rate />)} */}
            <Rate />
          </Form.Item>

          <Form.Item label="Upload" extra="longgggggggggggggggggggggggggggggggggg" name="upload" valuePropName='fileList' getValueFromEvent={this.normFile}>
            {/* {getFieldDecorator('upload', {
                        valuePropName: 'fileList',
                        getValueFromEvent: this.normFile,
                    })(
                        <Upload name="logo" action="/upload.do" listType="picture">
                            <Button>
                                Click to upload
                </Button>
                        </Upload>,
                    )} */}
            <Upload name="logo" action="/upload.do" listType="picture">
              <SmileOutlined />
              <Button>
                Click to upload
                </Button>
            </Upload>
          </Form.Item>

          <Form.Item label="Dragger" name="dragger" valuePropName='fileList' getValueFromEvent={this.normFile}>
            {/* {getFieldDecorator('dragger', {
                        valuePropName: 'fileList',
                        getValueFromEvent: this.normFile,
                    })(
                        <Upload.Dragger name="files" action="/upload.do">
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                        </Upload.Dragger>,
                    )} */}
            <Upload.Dragger name="files" action="/upload.do">
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">Support for a single or bulk upload.</p>
            </Upload.Dragger>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}

// export default Form.create({ name: 'validate_other' })(Demo);
export default Demo