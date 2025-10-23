import { motion } from 'framer-motion'
import Card from './Card'

const products = [{
    title: "Car Wheels",
},
{
    title: "Suspensions",
},
{
    title: "Brake Pads",
},
]

export default function CardsContainer({ isScrolled }: { isScrolled: boolean }) {
    return (
        <motion.div className='absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-5 flex justify-center gap-3 items-center text-white font-bold z-20'
            initial={{ opacity: 0, top: "100%" }}
            animate={{ opacity: isScrolled ? 1 : 0, top: isScrolled ? "70%" : "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
        >
            {products.map((product, index) => (
                <Card key={index} index={index} product={product} />
            ))}
        </motion.div>
    )
}
