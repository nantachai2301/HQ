import React from 'react'
import DateTh from '../../../../components/DateTh'
function MainPdf({dataQ}) {
  console.log('dataQ',dataQ)
  return (
    <div className='border content-pdf p-2'>
      <div className='d-flex justify-content-end'>
        <div>รหัสคิว : {dataQ ? dataQ.code : "_"}</div>
      </div>
      <div className='text-center'>
      <p className='font-number-q'>{dataQ ? dataQ.number : "_"}</p>
      </div>
      <b>เลขบัตรประชาชน : </b> {dataQ ? dataQ.id_card : "_"}
      <div>
        <b>ชื่อ-นามสกุล : </b> {dataQ ? dataQ.fullname : "_"}
      </div>
      <div>
        <b>ประเภทการรักษา : </b> {dataQ ? dataQ.treatment_type_name : "_"}
      </div>
      <div>
        <b>วันที่เข้ารับการรักษา : </b> {dataQ ? <DateTh date={dataQ.open_date}/> : "_"}
      </div>
    </div>
   
  )
}
export default MainPdf