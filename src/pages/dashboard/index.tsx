import { User } from '@prisma/client'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import { prisma } from '../../services/prisma'

export default function Dashboard(user: User) {

    console.log(user)
    
    return (
        <>
            <h1>Dashboard</h1>

        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const { user } = await getSession({ req })

    if(user) {
        const findUser = await prisma.user.findUnique({
            where: {
                email: user.email
            }
        })

        if(!findUser){
            const userCreate = await prisma.user.create({ data: { name: user.name, email: user.email } })  

            return {
                props: {
                    user: {
                        id: userCreate.id,
                        name: userCreate.name,
                        email: userCreate.email
                    }
                }
            }
        }

    }


    return {
        props: {
            user: {}
        }
    }
} 