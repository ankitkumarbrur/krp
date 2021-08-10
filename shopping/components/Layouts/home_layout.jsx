import Navbar from "../Elements/navbar/navbar"
const HomeLayout = ({children}) => {
    return (
        <>
            <Navbar />
            { children }
        </>
    )
}
export default HomeLayout;