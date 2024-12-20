import { PaintBrushIcon, ListBulletIcon } from '@heroicons/react/24/outline'

import {
    AdaptiveNavBar,
    Footer,
    Header,
    Hero,
    NavigationButton,
} from '../../../components'
import { Brands } from '../../brands'
import { Stages } from '../../stages'
import { useGetMakeupBagQuery } from '../makeupBagApiSlice'

export const MakeupBagPage = () => {
    const { data } = useGetMakeupBagQuery()

    const handleStages = () =>
        document
            .getElementById('stages')
            ?.scrollIntoView({ behavior: 'smooth' })

    const handleBrushes = () =>
        document
            .getElementById('brands')
            ?.scrollIntoView({ behavior: 'smooth' })

    return (
        <>
            <Header />

            <main className="flex flex-col items-center justify-center sm:ms-navbar-left lg:ms-navbar-left-open">
                <div className="w-full max-w-2xl">
                    <Hero />
                    <Stages stages={data?.stages} />
                    <Brands brands={data?.brands} />
                </div>
            </main>

            <Footer />

            <AdaptiveNavBar>
                <NavigationButton
                    icon={<ListBulletIcon className="h-6 w-6" />}
                    text="Этапы"
                    onClick={handleStages}
                />
                <NavigationButton
                    icon={<PaintBrushIcon className="h-6 w-6" />}
                    text="Кисти"
                    onClick={handleBrushes}
                />
            </AdaptiveNavBar>
        </>
    )
}
