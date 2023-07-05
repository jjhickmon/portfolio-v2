import Layout from "./layout";

function NoPage() {
    return (
        <div>
            <Layout />
            <h1 className="page-title">Sorry! <br /> This page does not exist</h1>
        </div>
    );
}

export default NoPage;