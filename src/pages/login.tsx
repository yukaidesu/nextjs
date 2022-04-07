import { useRouter } from 'next/router'

const Login = () => {
const router = useRouter()

  return (
    <div className="bg-gray">
      
      <main>
        <div className="flex flex-col border border-black">
          <div className="text-center py-2 m-2">
            <p className="text-3xl">ログイン</p>
          </div>

          

          <div className="text-center py-2 m-2">
            <form>
              <label>
                <input className="border border-black text" name="id/mail"/>
              </label>
            </form>
          </div>
          <div className="text-center py-2 m-2">
            <form>
              <label>
                <input className="border border-black text" name="pass" />
              </label>
            </form>
          </div>
          <div className="text-center py-2 m-2">
            <h1 className="title">
              <button className="px-2 py-1  bg-red text-lg text-white rounded-full">ログイン</button>
            </h1>
          </div>

          

          

        </div>
      </main>

    </div>
  );
};

export default Login;
