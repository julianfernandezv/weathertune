import { useState } from 'react'
import Layout from '../../Components/Layout'

function Contact() {
    const [count, setCount] = useState(0)

    return (
        <Layout>
            <h1 className="text-3xl font-bold">
                CONTACT PAGE
            </h1>
        </Layout>
    )
}

export default Contact
