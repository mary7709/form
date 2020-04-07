This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
## 总结表单
1.select表单默认为选择一个，若想实现选择多个，添加mode="multiple"属性，disabled可以设置禁用状态，
defaultValue是表示指定默认选中的条目，value表示选中的条目，OptGroup 进行选项分组。
2.进度条Slider，<Slider/>默认范围是0-100，点击会凸显对应的数值，若想分为多个节点，只需添加marks属性
eg：  marks={{
            0: 'A',
            30: 'B',
            40: 'C',
            60: 'D',
            80: 'E',
            100: 'F',
          }}
其中key值为想要分割为的份数，为自定义的数值，想要紧密一点，数值就设置小一点，value值为对应节点的标志说明，增强视觉效果
3.单选框由<Radio.Group></Radio.Group>包裹<Radio></Radio>,Radio里给定一个value值表示唯一，value值不可重复，若想实现按钮型点选框，用<Radio.Button>
4.复选框由 <Checkbox.Group>包裹<Checkbox></Checkbox>同单选框value值唯一，添加disabled属性，
表示禁选
5.上传：一般由<Upload>包裹<UploadOutlined />，默认可以上传一个文件夹下面的所有文件，包裹着它们的Form.Item可以添加extra属性，表示
说明文字，一般情况下上传会包裹一层button，若加上fileList属性可以实现展示上传的数量和显示链接，亦可
读取远程路径，可添加onChange事件为上传文件状态改变时的状态，onPreview事件是点击文件链接或预览图标时的回调
6.数字输入框：可设置最大值和最小值，当不在这个范围的时候，会禁用增加/减少，可设置数字输入框的禁用状态，
disabled设置为true即为禁用，autoFouce，blur和focus可以设置焦点事件
7.rate评分:常用属性有，allowClear是否允许点击后清除，allowHalf是否允许选择一半，count表示星星的总数，若用disabled表示只读，value表示当前数
8.table表格：表头以columns(自定义)=[{}]的形式展示，table里面以columns={}的形式接收，dataSource为要展示的数据，column：（columns中的一项）中的dataIndex属性为接收数据的凭证，当有这个值时，表示唯一值的key值要可忽略，align表示列的对齐方式，title表示头文字，render是表示生成复杂的数据，里面也可以设置表格的行、列
9.message全局提示： eg：message.success(content, [duration], onClose)，以成功为例，content
表示成功时的提示文字，duration表示显示多少秒消失，onCloses是表示关闭时触发的回调函数
10.Form.Item中常用，extra额外的提示信息，当需要提示文案和错误信息时使用，noStyls表示蠢字段组件，不带样式，name表示字段名，可以为数组，validateStatus表示成功，失败、警示等状态，required表示是不是必填项，label表示标签的文本，shouldUpdate，为true时，form的任意改变都会触发Form.Itemd的重新渲染。
 eg:rules={[
          {
            required: true,
            message: 'Please select your country!',
            whitespace:true
          },
        ]} 表示当不满足必填项时的提示信息,有空格时验证不通过
form：onFinish表示提交表单切验证成功后的回调，onFinishFailed表单验证失败后的回调，onValuesChange表示字段更新时的回调事件，validateMessages表示验证提示模板，用initialValues来设置默认值，可以使用 form.setFieldsValue 来动态改变表单值
