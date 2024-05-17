import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import upi from '../assets/upi.webp'
import logo1 from '../assets/logo1.png'

const FeatureUpdates = () => {
    return (
        <>
            <Carousel>
                <CarouselContent>
                    <CarouselItem>
                        <div className="flex w-full  h-[20vh] justify-between">
                            <div className="flex h-[60%] m-2">
                                <img src={upi} height={10} width={100}></img>
                            </div>
                            <div className="flex m-2 flex-col">
                                <h3 className="text-bold text-xl text-[#18a]">Collect Instant payment from customers with new <span className="text-[#e4d00a]">QR</span></h3>
                                <h2 className="text-bold text-xl text-[#e4d00a]">Code Feature</h2>
                                <div className="flex rounded-sm bg-[#e4d00a] w-[30%] justify-center">
                                    <button className="text-center">Apply Now</button>
                                </div>
                            </div>
                            <div className="h-[100%] w-[20%]">
                                <img src={logo1}></img>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselPrevious />
                    <CarouselNext />
                </CarouselContent>
            </Carousel>

        </>
    )
}

export default FeatureUpdates
