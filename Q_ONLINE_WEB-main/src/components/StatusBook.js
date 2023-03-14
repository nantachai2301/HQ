import React from 'react'

const StatusBook = ({status}) => {
    function chackStatus(status){
        switch (status) {
            case 1:
              return <span className="text-dark">รอเข้ารับการรักษา</span>;
            case 2:
              return <span className="text-info">รายงานตัวแล้ว</span>;
            case 3:
              return <span className="text-success">เข้ารับการรักษาแล้ว</span>;
            default:
              return <span className="text-danger">ยกเลิกคิว</span>;
          }
    }
  return (
    <div className='w-full'>{chackStatus(status)}</div>
  )
}

export default StatusBook