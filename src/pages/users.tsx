import Router, { useRouter } from "next/router"

export default function users() {
    const router = useRouter();
    var Users = [
        {id: 'id_1', name: 'user1', email: 'user1@gmail.com', authority: '管理者',},
        {id: 'id_2', name: 'user2', email: 'user2@gmail.com', authority: '管理者',},
        {id: 'id_3', name: 'user3', email: 'user3@gmail.com', authority: 'ユーザー',},
        {id: 'id_4', name: 'user4', email: 'user4@gmail.com', authority: '管理者',},
        {id: 'id_5', name: 'user5', email: 'user5@gmail.com', authority: 'ユーザー',},
    ]
    const clickButton = () => {
        router.push({
            pathname:"/show",   //URL
        });
    }
 
    return (
        <div className=" bg-gray">
            <header className="header text-right border border-black bg-white">
                {router.query.input}さん
            </header>
            <div className="grid grid-cols-9 gap-4">
                <div className="col-span-2 border border-black text-center p-10 bg-white">
                    <span onClick={ () => Router.push({pathname: '/home'}) }><button>Home</button></span><br />
                    <span onClick={ () => Router.push({pathname: '/users'}) }><button>ユーザ管理</button></span>
                </div>

                <div className="col-span-7">
                ユーザー管理<br />
                検索
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>名前</th>
                            <th>メールアドレス</th>
                            <th>権限</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="search" name="id" className="rounded-full border border-black"/></td>
                            <td><input type="search" name="name" className="rounded-full border border-black"/></td>
                            <td><input type="search" name="email" className="rounded-full border border-black"/></td>
                            <td><input type="search" name="authority" className="rounded-full border border-black"/></td>
                        </tr>
                    </tbody>
                </table>

                <br />
                <button className="px-2 py-1  bg-red text-lg text-white rounded-full border border-black">検索</button>
                <br />
                <br />
                ユーザー一覧
                    <table className="border border-black bg-white">
                        <thead className="border border-black">
                            <tr>
                                <th>id</th>
                                <th>名前</th>
                                <th>メールアドレス</th>
                                <th>権限</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr onClick={clickButton}>
                                <td>{Users[0].id}</td>
                                <td>{Users[0].name}</td>
                                <td>{Users[0].email}</td>
                                <td>{Users[0].authority}</td>
                            </tr>
                            <tr>
                                <td>{Users[1].id}</td>
                                <td>{Users[1].name}</td>
                                <td>{Users[1].email}</td>
                                <td>{Users[1].authority}</td>
                            </tr>
                            <tr>
                                <td>{Users[2].id}</td>
                                <td>{Users[2].name}</td>
                                <td>{Users[2].email}</td>
                                <td>{Users[2].authority}</td>
                            </tr>
                            <tr>
                                <td>{Users[3].id}</td>
                                <td>{Users[3].name}</td>
                                <td>{Users[3].email}</td>
                                <td>{Users[3].authority}</td>
                            </tr>
                            <tr>
                                <td>{Users[4].id}</td>
                                <td>{Users[4].name}</td>
                                <td>{Users[4].email}</td>
                                <td>{Users[4].authority}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}