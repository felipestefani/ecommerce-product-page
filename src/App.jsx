import TheFooter from "./components/TheFooter"
import NavigationBar from "./components/NavigationBar";
import DisplaySection from "./components/DisplaySection";
import ProductInfo from "./components/ProductInfo";
import MainProvider from "./contexts/MainContext";

const App = () => {
    return (
        <MainProvider>
            <div className="app_container">
                <NavigationBar />
                <hr />
                <main>
                    <section>
                        <DisplaySection />
                    </section>
                    <section>
                        <ProductInfo />
                    </section>
                </main>
                <TheFooter />
            </div>
        </MainProvider>
    )
}

export default App

