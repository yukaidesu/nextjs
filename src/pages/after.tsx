import { useRouter } from 'next/router'

export default function after () {
    console.log(useRouter().query)

    return (
        <div>{ 'こんにちは' + useRouter().query.name }</div>
    )
}