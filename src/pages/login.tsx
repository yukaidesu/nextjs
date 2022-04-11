import Router, { useRouter } from "next/router";
import React, { useState } from 'react';

export default function login() {
  const router = useRouter();           //ルーターの取得
    const [input, setInput] = useState<any>();
    const clickButton = () => {
      router.push({
        pathname:"/home",   //URL
        query: {input :input} //検索クエリ
      });
    }

  return (
    <div className="bg-gray"> 
      <main>
        <div className="flex flex-col">
          <div className="text-center py-2 m-2">
            <p className="text-3xl">ログイン</p>
          </div>

          <div className="text-center py-2 m-2">
            <form>
              <label>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="border rounded-full border-black" />
              </label>
            </form>
          </div>
          <div className="text-center py-2 m-2">
            <form>
              <label>
                <input type="password" className="border rounded-full border-black" />
              </label>
            </form>
          </div>
          <div className="text-center py-2 m-2">
            <span onClick={clickButton}>
            <button className="px-2 py-1  bg-red text-lg text-white rounded-full border border-black">
              ログイン
            </button>
            </span>
          </div>
        </div>
      </main>

    </div>
  )
}