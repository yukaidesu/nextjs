import Router, { useRouter } from "next/router"
import users from "./users";

export default function show() {
    const router = useRouter();
    var Users = [
        {id: 'id_1', name: 'user1', email: 'user1@gmail.com', authority: '管理者',},
        {id: 'id_2', name: 'user2', email: 'user2@gmail.com', authority: '管理者',},
        {id: 'id_3', name: 'user3', email: 'user3@gmail.com', authority: 'ユーザー',},
        {id: 'id_4', name: 'user4', email: 'user4@gmail.com', authority: '管理者',},
        {id: 'id_5', name: 'user5', email: 'user5@gmail.com', authority: 'ユーザー',},
    ]
 
    return (
        <div className=" bg-gray">
            <header className="header text-right border border-black bg-white">
                {router.query.input}さん
            </header>
            <main>

                <div className="grid grid-cols-9 gap-4">
                    <div className="col-span-2 border border-black text-center p-10 bg-white">
                        <span onClick={ () => Router.push({pathname: '/home'}) }><button>Home</button></span><br />
                        <span onClick={ () => Router.push({pathname: '/users'}) }><button>ユーザ管理</button></span>
                    </div>

                    <div className="col-span-7">
                        ユーザー画面・ユーザー詳細
                        <table>
                            <tbody>
                                <tr>
                                    <td>id:</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>名前:</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>メールアドレス:</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>権限:</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>

                        <button className="px-2 py-1  bg-red text-lg text-white rounded-full border border-black">
                            編集
                        </button>
                        <button className="px-2 py-1 rounded-full border border-black">
                            戻る
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}