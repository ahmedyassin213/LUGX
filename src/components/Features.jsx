import FeatureCard from './FeatureCard'

const Features = () => {
  return (
    <div className=' mt-10 flex w-full justify-around max-md:flex-col max-md:mx-auto'>
        <FeatureCard title="FREE STORAGE" image="..\..\public\card11.png"></FeatureCard>
        <FeatureCard title="USER MODE" image="..\..\public\card12.png"></FeatureCard>
        <FeatureCard title="REPLY READY" image="..\..\public\card13.png"></FeatureCard>
        <FeatureCard title="EASY LAYOUT" image="..\..\public\card14.png"></FeatureCard>
      
    </div>
  )
}
export default Features
