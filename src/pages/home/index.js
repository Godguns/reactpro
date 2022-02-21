import { Button } from 'antd'
import Header from '@/components/header'
function Home() {

    return (
        <div className="P-home">
            <Header />
            <h1>Home Page</h1>
            <div className="ipt-con">
                <Button>返回登录</Button>
            </div>
        </div>
    )
}

export default Home
