import TheFooter from "./components/TheFooter"
import NavigationBar from "./components/NavigationBar";
import DisplaySection from "./components/DisplaySection";

const App = () => {
    return (
        <div className="app_container">
            <NavigationBar />
            <hr />
            <main>
                <section>
                    <DisplaySection />
                </section>
                <section>
                Sneaker Company
            
            Fall Limited Edition Sneakers
            
            These low-profile sneakers are your perfect casual wear companion. Featuring a 
            durable rubber outer sole, they’ll withstand everything the weather can offer.
            
            $125.00
            50%
            $250.00
            
            0
            Add to cart
                </section>
            </main>

            
            
            <TheFooter />
        </div>
    )
}

export default App

