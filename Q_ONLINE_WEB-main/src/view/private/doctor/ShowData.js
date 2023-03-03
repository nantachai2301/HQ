import React from 'react'
import { TextSelect } from '../../../components/TextSelect';
import PageSize from '../../../data/pageSize.json';
import Pagination from 'react-js-pagination';
import { useNavigate } from 'react-router-dom';

function ShowData({ data, pagin}) {
const navigate = useNavigate();

    return (
      <div className="w-full">
        <div className="d-flex justify-content-between mb-2">
          <div className="w-pagesize">
            <TextSelect
              id="pagesize"
              name="pagesize"
              options={PageSize}
              value={PageSize.filter((a) => a.id === 10/*pagin.pageSize*/)}
              onChange={(item) => {
                // changePageSize(item.id);
              }}
              getOptionLabel={(z) => z.label}
              getOptionValue={(x) => x.id}
            />
          </div>
          <div>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                navigate('/admin/doctor/form')
              }}
            >
              <i className="fa-solid fa-plus mx-1"></i>
              เพิ่ม
            </button>
          </div>
        </div>
        <div className="overflow-auto">
          <table className="table">
            <thead>
              <tr className="table-success">
                <th scope="col" style={{ width: '5%' }}>
                  ลำดับ
                </th>
                <th scope="col" style={{ width: '40%' }}>
                  ชื่อ-นามสกุล
                </th>
                <th scope="col" style={{ width: '20%' }}>
                  ประเภทการรักษา
                </th>
                <th scope="col" style={{ width: '20%' }}>
                  สถานะการใช้งาน
                </th>
                <th scope="col" style={{ width: '15%' }}>
                  จัดการ
                </th>
              </tr>
            </thead>
            <tbody>
                {data.map((item, index) =>(
                <tr key={item.id}>
                <td>{(pagin.currentPage - 1) * pagin.pageSize + (index + 1)}</td>
                <td>{`${item.name} ${item.lastname}`}</td>
                <td>{item.treatment_type_name}</td>
                <td>{item.isused === 1 ? 'ใช้งาน' : 'ไม่ใช้งาน'}</td>
                <td>
               
            
                <button
                
                      type="button"
                      className="btn btn-warning text-white mx-1 mt-1"
                      onClick={() => {
                        console.log();
                      }}
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    
                    <button
                      type="button"
                      className={`btn text-white mx-1 mt-1 ${1 === 1 ? 'btn-danger' : 'btn-success'}`}
                      onClick={() => {
                        console.log();
                      }}
                    >
                      {1 === 1 ? <i className="fa-solid fa-lock"></i> : <i className="fa-solid fa-lock-open"></i>}
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger text-white mx-1 mt-1"
                      onClick={() => {
                        console.log();
                      }}
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                    
                </td>
            </tr> 
            ))}
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-between">
          <div>จำนวน {1/*pagin.totalRow*/} รายการ</div>
          <div>
            <Pagination
              activePage={1/*pagin.currentPage*/}
              itemsCountPerPage={10 /*pagin.pageSize*/}
              totalItemsCount={1 /*pagin.totalRow*/}
              pageRangeDisplayed={1 /*pagin.totalPage*/}
              onChange={(page) => {
                //changePage(page);
              }}
            />
          </div>
        </div>
      </div>
    );
  }

export default ShowData