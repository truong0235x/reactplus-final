import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import images from "../../assets/images";
import { getTasksList } from "../../sevices/axios/tasksServices";
import "./Dashboard.scss"

function Dashboard() {
  const navigate = useNavigate()
  const [tasksList, setTaskList] = useState([])

  const avatar = localStorage.getItem('avatar')
  const name = localStorage.getItem('name')
  const id = localStorage.getItem('id')

  useEffect(()=>{
    getTasksList()
      .then(res=>{
        setTaskList(res?.data)
      })
  },[])

  return(
    <div className='dashboard'>
      <div className='information-user'>
        <div className='wrap-avatar'>
          <div className='avatar'>
            <img src={avatar || images.avatar} alt='avatar' />
          </div>
        </div>
        <h3>{name || "Monica Gamage"}</h3>
        <p>@{id || "monicagamage"}</p>
        <div className='button'>
          <button onClick={()=> navigate("/sign-in")}>Log Out</button>
        </div>
      </div>

      <div className='wrap-clock'>
        <div className='clock'>
          <img className='clock' src={images.groupclock} alt='clock' />
        </div>
        <div className='text'>
          Good Afternoon
        </div>
      </div>

      <div className='wrap-tasks-list'>
        <h3>Task List</h3>
        <div className='tasks-list'>
          <div className='tasks-list-title'>
            <div className='text'>Tasks List</div>
            <div className='icon'><img src={images.plusCircle} alt='plus Circle' /></div>
          </div>
          <div className='tasks-list-wrpaper'>
            {
              tasksList && tasksList.map((item)=>(
                <div key={item.id} className='wrap-task'>
                  {
                    item.completed ? 
                    <>
                      <img src={images.circle2} alt="circle" />
                      <div>{item.name}</div>
                    </>
                    :
                    <>
                      <img src={images.square} alt="circle" />
                      <div>{item.name}</div>
                    </>
                  }
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;