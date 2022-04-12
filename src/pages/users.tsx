import Router, { useRouter } from "next/router";
import Styles from '../styles/Home.module.css';
import Header from '../compornent/header';
import Sidebar from '../compornent/sidebar';

export default function users() {
    const router = useRouter();
    const user = [
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
            <Header />

            <div className="grid grid-cols-9 gap-4">
                <Sidebar />
                
                <div className="col-span-7">
                    <div className={Styles.box} >
                        <div className={Styles.content}>
                            ユーザー管理<br />
                            検索
                            <table className={Styles.form}>
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
                            <table className={Styles.table}>
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>名前</th>
                                        <th>メールアドレス</th>
                                        <th>権限</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {user.map((value, key) => {
                                        return (
                                            <tr key={key} onClick={ () => Router.push({pathname: '/show', query: {id: value.id,name: value.name, email: value.email ,authority: value.authority}}) } className="border border-black">
                                                <td>{value.id}</td>
                                                <td>{value.name}</td>
                                                <td>{value.email}</td>
                                                <td>{value.authority}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}