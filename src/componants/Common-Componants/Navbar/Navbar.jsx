import {AiOutlineSearch, AiOutlineBell, AiOutlineMessage, AiFillSetting} from "react-icons/ai"
import {GrLanguage} from "react-icons/gr"
import {BiMoon, BiMenuAltRight} from "react-icons/bi"
import {RiDashboardFill} from "react-icons/ri"

const Navbar = () => {
  return (
    <div className='border-b border-gray-300 flex'>
        <div className=' md:w-[20%] border-r border-gray-300 p-4 text-orange-500'> <span className='text-2xl'>Logo</span></div>
        <div className="otherOptions flex w-[80%] items-center justify-between px-6">
          <div className="input border border-gray-300 rounded-md h-[35px] flex items-center px-3">
            <input type="text" placeholder='Search...' className="outline-none text-lg" />
            <AiOutlineSearch className="text-xl cursor-pointer" />
          </div>
          <div className="userOptions hidden md:flex items-center space-x-4">
            <div className="language flex items-center cursor-pointer">
              <GrLanguage className="text-2xl mr-2" />
              <span>English</span>
            </div>
            <div className="moon cursor-pointer">
              <BiMoon className="text-2xl"/>
            </div>
            <div className="arrowInside cursor-pointer">
              <RiDashboardFill className="text-2xl" />
            </div>
            <div className="notification relative cursor-pointer">
              <AiOutlineBell className="text-3xl" />
              <div className="notificationNumber absolute top-[-4px] right-[-4px] h-[20px] w-[20px] rounded-full bg-red-500 text-white flex justify-center items-center">
                <span className=""> 4</span>
              </div>
            </div>
            <div className="Message relative cursor-pointer">
              <AiOutlineMessage className="text-3xl" />
              <div className="notificationNumber absolute top-[-4px] right-[-4px] h-[20px] w-[20px] rounded-full bg-red-500 text-white flex justify-center items-center">
                <span className=""> 4</span>
              </div>
            </div>
            <div className="menu cursor-pointer">
              <BiMenuAltRight className="text-3xl" />
            </div>
            <div className="profile h-[40px] w-[40px] overflow-hidden flex items-center rounded-full cursor-pointer">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHs-OcjJOoWkPZk3tEPzegLO34Jkt_hFkwe24hReoyURom3r69RHhSbA1k8aLxWg_38MA&usqp=CAU" alt="" />
            </div>
            <div className="setting cursor-pointer">
              <AiFillSetting className="text-2xl" />
            </div>
          </div>
        </div>      
    </div>
  )
}

export default Navbar