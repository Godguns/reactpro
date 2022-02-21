import { Button, Input } from 'antd'
import Header from '../../components/header'
function Login() {

    return (
        <div className="P-login">
            <Header />
            <div className="ipt-con">
                <Input placeholder="账号" />
            </div>
            <div className="ipt-con">
                <Input.Password placeholder="密码" />
            </div>
            <div className="ipt-con">
                <Button type="primary" block={true}>
                    登录
                </Button>
            </div>
        </div>
    )
}

export default Login
