import Button from './Button'


const Header = () => {
  return (
    <header className='w-full z-50 bg-blue-500 flex px-10 py-4 justify-around items-center text-white fixed top-0 max-md:flex-col max-md:items-center max-md:gap-3' >
      <img className='w-30' src="..\..\public\logo.png" alt="" />
      <ul className='flex items-center gap-10 list-none max-md:flex-col max-md:gap-2 max-md:mx-auto'>
        <li><a className='px-4 py-3 hover:bg-blue-600 duration-300 rounded-3xl'  href="">Home</a></li>
        <li><a className='px-4 py-3 hover:bg-blue-600 duration-300 rounded-3xl' href="">Our Shop</a></li>
        <li><a className='px-4 py-3 hover:bg-blue-600 duration-300 rounded-3xl' href="">Product Details </a></li>
        <li><a className='px-4 py-3 hover:bg-blue-600 duration-300 rounded-3xl' href="">Contact us </a></li>
      </ul>
      <Button name="SIGN IN"></Button>
    </header>
  )
}

export default Header
