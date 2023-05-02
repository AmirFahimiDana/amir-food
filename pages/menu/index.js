import MenuPage from '@/components/template/MenuPage'

function Menu({ data }) {
    return (
        <MenuPage data={data} />
    )
}

export default Menu

export async function getStaticProps() {
    const res = await fetch(`${process.env.BASE_URL}/data`)
    const data = await res.json()

    return {
        props: { data },
        ////10 second
        revalidate: +process.env.REVALIDATE,
        //// 1 hour
        //revalidate: 60 * 60 ,

    }
}