import Router, { useRouter } from "next/router"

export default function sidebar() {
    return (
        <div className="col-span-2 border border-black text-center p-10 bg-white">
            <span onClick={ () => Router.push({pathname: '/home'}) }><button>Home</button></span><br />
            <span onClick={ () => Router.push({pathname: '/users'}) }><button>ユーザ管理</button></span>
        </div>
    )
}