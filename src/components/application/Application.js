import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { Dropdown } from 'react-bootstrap';

function Application() {
  const [data, setData] = useState(document.querySelectorAll('#application tbody tr'));
  const sort = 7;
  const activePag = useRef(0);
  const [test, settest] = useState(0);

  // Active data
  const chageData = (frist, sec) => {
    for (var i = 0; i < data.length; ++i) {
      if (i >= frist && i < sec) {
        data[i].classList.remove('d-none');
      } else {
        data[i].classList.add('d-none');
      }
    }
  };

  // use effect
  useEffect(() => {
    setData(document.querySelectorAll('#application tbody tr'));
    handleCheckbox();
  }, [test]);

  // Active pagginarion
  activePag.current === 0 && chageData(0, sort);
  // paggination
  let paggination = Array(Math.ceil(data.length / sort))
    .fill()
    .map((_, i) => i + 1);

  // Active paggination & chage data
  const onClick = (i) => {
    activePag.current = i;
    chageData(activePag.current * sort, (activePag.current + 1) * sort);
    settest(i);
  };

  const checkbox = document.querySelectorAll('.application_sorting_1 input');
  const motherCheckbox = document.querySelector('#checkAll');

  const handleCheckbox = (type) => {
    for (let i = 0; i < checkbox.length; i++) {
      const element = checkbox[i];
      if (type === 'all') {
        if (motherCheckbox.checked) {
          element.checked = true;
        } else {
          element.checked = false;
        }
      } else {
        if (!element.checked) {
          motherCheckbox.checked = false;
          break;
        } else {
          motherCheckbox.checked = true;
        }
      }
    }
  };

  return (
    <Fragment>
      <div className='d-flex flex-wrap mb-4 align-items-center search-filter'>
        <div className='mr-auto mb-2 pr-2'>
          <h6 className='text-black fs-16 font-w600 mb-1'>Showing 246 Jobs Results</h6>
          <span className='fs-14'>Based your preferences</span>
        </div>
        <div className='custom-control check-switch custom-checkbox mr-4 mb-2'>
          <input type='checkbox' className='custom-control-input' id='customCheck9' />
          <label className='custom-control-label' htmlFor='customCheck9'>
            Fulltime
          </label>
        </div>
        <div className='custom-control check-switch custom-checkbox mr-5 mb-2'>
          <input type='checkbox' className='custom-control-input' id='customCheck1' />
          <label className='custom-control-label' htmlFor='customCheck1'>
            Freelance
          </label>
        </div>
        <div className='custom-control custom-switch toggle-switch text-right mr-4 mb-2'>
          <input type='checkbox' className='custom-control-input' id='customSwitch11' />
          <label className='custom-control-label' htmlFor='customSwitch11'>
            Details
          </label>
        </div>
        <div className='custom-control custom-switch toggle-switch text-right mr-5 mb-2'>
          <input type='checkbox' className='custom-control-input' id='customSwitch12' />
          <label className='custom-control-label' htmlFor='customSwitch12'>
            Salary
          </label>
        </div>
        <Dropdown className='dropdown custom-dropdown mb-0 mr-4 mt-3 mt-sm-0 mb-2'>
          <Dropdown.Toggle
            className='btn border border-primary text-black btn-rounded i-false'
            role='button'
            data-toggle='dropdown'
            aria-expanded='false'
            variant=''>
            <svg
              className='mr-2 scale5'
              width={14}
              height={14}
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M10.2932 16.293L8.00016 18.5859V3C8.00016 2.73478 7.89481 2.48043 7.70727 2.29289C7.51973 2.10536 7.26538 2 7.00016 2C6.73495 2 6.48059 2.10536 6.29306 2.29289C6.10552 2.48043 6.00016 2.73478 6.00016 3V18.5859L3.70716 16.293C3.51856 16.1108 3.26596 16.01 3.00376 16.0123C2.74156 16.0146 2.49075 16.1198 2.30534 16.3052C2.11994 16.4906 2.01477 16.7414 2.01249 17.0036C2.01021 17.2658 2.111 17.5184 2.29316 17.707L6.29316 21.707C6.48086 21.8942 6.73513 21.9993 7.00021 21.9993C7.2653 21.9993 7.51956 21.8942 7.70726 21.707L11.7073 17.707C11.8901 17.5185 11.9914 17.2657 11.9894 17.0031C11.9874 16.7405 11.8822 16.4893 11.6965 16.3036C11.5109 16.118 11.2596 16.0128 10.997 16.0108C10.7345 16.0088 10.4816 16.1102 10.2932 16.293Z'
                fill='#40189D'
              />
              <path
                d='M11.0002 6H21.0002C21.2655 6 21.5198 5.89464 21.7074 5.7071C21.8949 5.51957 22.0002 5.26521 22.0002 5C22.0002 4.73478 21.8949 4.48043 21.7074 4.29289C21.5198 4.10536 21.2655 4 21.0002 4H11.0002C10.735 4 10.4807 4.10536 10.2931 4.29289C10.1056 4.48043 10.0002 4.73478 10.0002 5C10.0002 5.26521 10.1056 5.51957 10.2931 5.7071C10.4807 5.89464 10.735 6 11.0002 6Z'
                fill='#40189D'
              />
              <path
                d='M21.0002 8H11.0002C10.735 8 10.4807 8.10536 10.2931 8.29289C10.1056 8.48043 10.0002 8.73478 10.0002 9C10.0002 9.26521 10.1056 9.51957 10.2931 9.7071C10.4807 9.89464 10.735 10 11.0002 10H21.0002C21.2655 10 21.5198 9.89464 21.7074 9.7071C21.8949 9.51957 22.0002 9.26521 22.0002 9C22.0002 8.73478 21.8949 8.48043 21.7074 8.29289C21.5198 8.10536 21.2655 8 21.0002 8Z'
                fill='#40189D'
              />
              <path
                d='M18.0002 12H11.0002C10.735 12 10.4807 12.1054 10.2931 12.2929C10.1056 12.4804 10.0002 12.7348 10.0002 13C10.0002 13.2652 10.1056 13.5196 10.2931 13.7071C10.4807 13.8947 10.735 14 11.0002 14H18.0002C18.2655 14 18.5198 13.8947 18.7074 13.7071C18.8949 13.5196 19.0002 13.2652 19.0002 13C19.0002 12.7348 18.8949 12.4804 18.7074 12.2929C18.5198 12.1054 18.2655 12 18.0002 12Z'
                fill='#40189D'
              />
            </svg>
            Newest
            <i className='las la-angle-down scale5 text-primary ml-3' />
          </Dropdown.Toggle>
          <Dropdown.Menu className='dropdown-menu dropdown-menu-right'>
            <Dropdown.Item className='dropdown-item'>Details</Dropdown.Item>
            <Dropdown.Item className='dropdown-item text-danger'>Cancel</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <a className='mr-3 mb-2'>
          <span className='border border-primary rounded-circle d-block sharp-lg'>
            <svg
              className='scale5'
              width={14}
              height={14}
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M6 7.5H3C2.17275 7.5 1.5 6.82687 1.5 6V3C1.5 2.17313 2.17275 1.5 3 1.5H6C6.82725 1.5 7.5 2.17313 7.5 3V6C7.5 6.82687 6.82725 7.5 6 7.5ZM3 3V6H6.00113L6 3H3ZM22.5 4.5C22.5 4.08544 22.1642 3.75 21.75 3.75H9.75C9.33581 3.75 9 4.08544 9 4.5C9 4.91456 9.33581 5.25 9.75 5.25H21.75C22.1642 5.25 22.5 4.91456 22.5 4.5ZM6 15H3C2.17275 15 1.5 14.3269 1.5 13.5V10.5C1.5 9.67313 2.17275 9 3 9H6C6.82725 9 7.5 9.67313 7.5 10.5V13.5C7.5 14.3269 6.82725 15 6 15ZM3 10.5V13.5H6.00113L6 10.5H3ZM22.5 12C22.5 11.5854 22.1642 11.25 21.75 11.25H9.75C9.33581 11.25 9 11.5854 9 12C9 12.4146 9.33581 12.75 9.75 12.75H21.75C22.1642 12.75 22.5 12.4146 22.5 12ZM6 22.5H3C2.17275 22.5 1.5 21.8269 1.5 21V18C1.5 17.1731 2.17275 16.5 3 16.5H6C6.82725 16.5 7.5 17.1731 7.5 18V21C7.5 21.8269 6.82725 22.5 6 22.5ZM3 18V21H6.00113L6 18H3ZM22.5 19.5C22.5 19.0854 22.1642 18.75 21.75 18.75H9.75C9.33581 18.75 9 19.0854 9 19.5C9 19.9146 9.33581 20.25 9.75 20.25H21.75C22.1642 20.25 22.5 19.9146 22.5 19.5Z'
                fill='#40189D'
              />
            </svg>
          </span>
        </a>
        <a className='mb-2'>
          <span className='bg-primary rounded-circle d-block sharp-lg'>
            <svg
              className='scale5'
              width={14}
              height={14}
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M10 1H2C1.73478 1 1.48043 1.10536 1.29289 1.29289C1.10536 1.48043 1 1.73478 1 2V10C1 10.2652 1.10536 10.5196 1.29289 10.7071C1.48043 10.8946 1.73478 11 2 11H10C10.2652 11 10.5196 10.8946 10.7071 10.7071C10.8946 10.5196 11 10.2652 11 10V2C11 1.73478 10.8946 1.48043 10.7071 1.29289C10.5196 1.10536 10.2652 1 10 1ZM9 9H3V3H9V9Z'
                fill='white'
              />
              <path
                d='M22 1H14C13.7348 1 13.4804 1.10536 13.2929 1.29289C13.1054 1.48043 13 1.73478 13 2V10C13 10.2652 13.1054 10.5196 13.2929 10.7071C13.4804 10.8946 13.7348 11 14 11H22C22.2652 11 22.5196 10.8946 22.7071 10.7071C22.8946 10.5196 23 10.2652 23 10V2C23 1.73478 22.8946 1.48043 22.7071 1.29289C22.5196 1.10536 22.2652 1 22 1ZM21 9H15V3H21V9Z'
                fill='white'
              />
              <path
                d='M10 13H2C1.73478 13 1.48043 13.1054 1.29289 13.2929C1.10536 13.4804 1 13.7348 1 14V22C1 22.2652 1.10536 22.5196 1.29289 22.7071C1.48043 22.8946 1.73478 23 2 23H10C10.2652 23 10.5196 22.8946 10.7071 22.7071C10.8946 22.5196 11 22.2652 11 22V14C11 13.7348 10.8946 13.4804 10.7071 13.2929C10.5196 13.1054 10.2652 13 10 13ZM9 21H3V15H9V21Z'
                fill='white'
              />
              <path
                d='M22 13H14C13.7348 13 13.4804 13.1054 13.2929 13.2929C13.1054 13.4804 13 13.7348 13 14V22C13 22.2652 13.1054 22.5196 13.2929 22.7071C13.4804 22.8946 13.7348 23 14 23H22C22.2652 23 22.5196 22.8946 22.7071 22.7071C22.8946 22.5196 23 22.2652 23 22V14C23 13.7348 22.8946 13.4804 22.7071 13.2929C22.5196 13.1054 22.2652 13 22 13ZM21 21H15V15H21V21Z'
                fill='white'
              />
            </svg>
          </span>
        </a>
      </div>
      <div className='row'>
        <div className='col-xl-12'>
          <div className='table-responsive'>
            <div id='application' className='dataTables_wrapper no-footer'>
              <table
                className='table display mb-4 dataTablesCard table-responsive-xl card-table dataTable no-footer'
                id='example5'>
                <thead>
                  <tr role='row'>
                    <th className='application_sorting_asc'>
                      <div className='checkbox mr-0 align-self-center'>
                        <div className='custom-control custom-checkbox '>
                          <input
                            type='checkbox'
                            className='custom-control-input'
                            id='checkAll'
                            required
                            onClick={() => handleCheckbox('all')}
                          />
                          <label className='custom-control-label' htmlFor='checkAll' />
                        </div>
                      </div>
                    </th>
                    <th className='sorting'>ID</th>
                    <th className='sorting'>Date Applied</th>
                    <th className='sorting'>Company</th>
                    <th className='sorting'>Type</th>
                    <th className='sorting'>Postition</th>
                    <th className='sorting'>Contact</th>
                    <th className='sorting'>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr role='row' className='odd'>
                    <td className='application_sorting_1'>
                      <div className='checkbox mr-0 align-self-center'>
                        <div className='custom-control custom-checkbox '>
                          <input
                            type='checkbox'
                            onClick={() => handleCheckbox()}
                            className='custom-control-input'
                            id='check1'
                            required
                          />
                          <label className='custom-control-label' htmlFor='check1' />
                        </div>
                      </div>
                    </td>
                    <td>#APL-0001</td>
                    <td>June 1, 2020, 08:22 AM</td>
                    <td>
                      <div className='media'>
                        <svg
                          className='mr-3'
                          width={50}
                          height={50}
                          viewBox='0 0 50 50'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            d='M0 7.27273C0 3.25611 3.25611 0 7.27273 0H42.7273C46.7439 0 50 3.25611 50 7.27273V42.7273C50 46.7439 46.7439 50 42.7273 50H7.27273C3.25611 50 0 46.7439 0 42.7273V7.27273Z'
                            fill='#D3D3D3'
                          />
                          <path
                            d='M0 7.27273C0 3.25611 3.25611 0 7.27273 0H42.7273C46.7439 0 50 3.25611 50 7.27273V42.7273C50 46.7439 46.7439 50 42.7273 50H7.27273C3.25611 50 0 46.7439 0 42.7273V7.27273Z'
                            fill='#40C7CF'
                          />
                          <path
                            d='M12.8885 12.8887C14.4638 11.3134 16.3339 10.0638 18.3921 9.21129C20.4503 8.35875 22.6563 7.91996 24.884 7.91996C27.1118 7.91996 29.3178 8.35875 31.376 9.21129C33.4342 10.0638 35.3043 11.3134 36.8796 12.8887C38.4549 14.464 39.7045 16.3341 40.557 18.3923C41.4095 20.4505 41.8483 22.6565 41.8483 24.8842C41.8483 27.112 41.4095 29.318 40.557 31.3762C39.7045 33.4344 38.4549 35.3045 36.8796 36.8798L30.8818 30.882C31.6695 30.0944 32.2942 29.1593 32.7205 28.1302C33.1468 27.1011 33.3662 25.9981 33.3662 24.8842C33.3662 23.7704 33.1468 22.6674 32.7205 21.6383C32.2942 20.6092 31.6695 19.6741 30.8818 18.8865C30.0942 18.0988 29.1591 17.474 28.13 17.0478C27.1009 16.6215 25.9979 16.4021 24.884 16.4021C23.7701 16.4021 22.6672 16.6215 21.6381 17.0478C20.609 17.474 19.6739 18.0988 18.8863 18.8865L12.8885 12.8887Z'
                            fill='#8FD7FF'
                          />
                          <path
                            d='M12.8885 36.8798C9.70705 33.6984 7.91975 29.3835 7.91975 24.8843C7.91975 20.385 9.70705 16.0701 12.8885 12.8887C16.0699 9.70727 20.3848 7.91997 24.884 7.91996C29.3832 7.91996 33.6982 9.70726 36.8796 12.8887L30.8818 18.8865C29.2911 17.2958 27.1336 16.4021 24.884 16.4021C22.6344 16.4021 20.477 17.2958 18.8863 18.8865C17.2955 20.4772 16.4019 22.6346 16.4019 24.8843C16.4019 27.1339 17.2955 29.2913 18.8863 30.882L12.8885 36.8798Z'
                            fill='white'
                          />
                        </svg>
                        <div className='media-body text-nowrap'>
                          <h6 className='text-black font-w600 fs-16 mb-0'>
                            Highspeed Studios
                          </h6>
                          <span className='fs-14'>Creative Design Agency</span>
                        </div>
                      </div>
                    </td>
                    <td>FULLTIME</td>
                    <td>Senior UX Designer</td>
                    <td>
                      <div className='d-flex'>
                        <a className='contact-icon mr-3' href='#'>
                          <i className='fa fa-phone' aria-hidden='true' />
                        </a>
                        <a className='contact-icon' href='#'>
                          <i className='las la-envelope' />
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className='d-flex align-items-center'>
                        <a className='btn rounded btn-success mr-3 ml-auto' href='#'>
                          Candidate
                        </a>
                        <Dropdown className='dropdown float-right custom-dropdown mb-0'>
                          <Dropdown.Toggle
                            className='
                          i-false'
                            data-toggle='dropdown'
                            variant=''>
                            <svg
                              width={24}
                              height={24}
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'>
                              <path
                                d='M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z'
                                stroke='#2E2E2E'
                                strokeWidth={2}
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                              <path
                                d='M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z'
                                stroke='#2E2E2E'
                                strokeWidth={2}
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                              <path
                                d='M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z'
                                stroke='#2E2E2E'
                                strokeWidth={2}
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                            </svg>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className='dropdown-menu dropdown-menu-right'>
                            <Dropdown.Item className='dropdown-item'>
                              Details
                            </Dropdown.Item>
                            <Dropdown.Item className='dropdown-item text-danger'>
                              Cancel
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr role='row' className='even'>
                    <td className='application_sorting_1'>
                      <div className='checkbox mr-0 align-self-center'>
                        <div className='custom-control custom-checkbox '>
                          <input
                            onClick={() => handleCheckbox()}
                            type='checkbox'
                            className='custom-control-input'
                            id='check2'
                            required
                          />
                          <label className='custom-control-label' htmlFor='check2' />
                        </div>
                      </div>
                    </td>
                    <td>#APL-0002</td>
                    <td>June 1, 2020, 08:22 AM</td>
                    <td>
                      <div className='media'>
                        <svg
                          className='mr-3'
                          width={50}
                          height={50}
                          viewBox='0 0 50 50'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            d='M0 7.27273C0 3.25611 3.25611 0 7.27273 0H42.7273C46.7439 0 50 3.25611 50 7.27273V42.7273C50 46.7439 46.7439 50 42.7273 50H7.27273C3.25611 50 0 46.7439 0 42.7273V7.27273Z'
                            fill='#D3D3D3'
                          />
                          <path
                            d='M0 7.27273C0 3.25611 3.25611 0 7.27273 0H42.7273C46.7439 0 50 3.25611 50 7.27273V42.7273C50 46.7439 46.7439 50 42.7273 50H7.27273C3.25611 50 0 46.7439 0 42.7273V7.27273Z'
                            fill='#4B58CF'
                          />
                          <path
                            d='M12.889 12.8887C14.4642 11.3134 16.3344 10.0639 18.3926 9.21132C20.4508 8.35878 22.6567 7.91999 24.8845 7.91999C27.1123 7.91999 29.3183 8.35878 31.3765 9.21132C33.4347 10.0639 35.3048 11.3134 36.8801 12.8887C38.4554 14.464 39.7049 16.3341 40.5575 18.3923C41.41 20.4505 41.8488 22.6565 41.8488 24.8843C41.8488 27.1121 41.41 29.318 40.5575 31.3762C39.7049 33.4344 38.4554 35.3046 36.8801 36.8798L30.8823 30.8821C31.6699 30.0944 32.2947 29.1594 32.721 28.1303C33.1473 27.1011 33.3667 25.9982 33.3667 24.8843C33.3667 23.7704 33.1473 22.6674 32.721 21.6383C32.2947 20.6092 31.6699 19.6741 30.8823 18.8865C30.0947 18.0989 29.1596 17.4741 28.1305 17.0478C27.1014 16.6215 25.9984 16.4021 24.8845 16.4021C23.7706 16.4021 22.6676 16.6215 21.6385 17.0478C20.6094 17.4741 19.6744 18.0989 18.8867 18.8865L12.889 12.8887Z'
                            fill='#8FD7FF'
                          />
                          <path
                            d='M12.889 36.8798C9.70754 33.6984 7.92024 29.3835 7.92024 24.8843C7.92023 20.385 9.70754 16.0701 12.889 12.8887C16.0704 9.70727 20.3853 7.91997 24.8845 7.91996C29.3837 7.91996 33.6987 9.70726 36.8801 12.8887L30.8823 18.8865C29.2916 17.2958 27.1341 16.4021 24.8845 16.4021C22.6349 16.4021 20.4774 17.2958 18.8867 18.8865C17.296 20.4772 16.4024 22.6346 16.4024 24.8843C16.4024 27.1339 17.296 29.2913 18.8867 30.882L12.889 36.8798Z'
                            fill='white'
                          />
                        </svg>
                        <div className='media-body text-nowrap'>
                          <h6 className='text-black font-w600 fs-16 mb-0'>Funk Inc.</h6>
                          <span className='fs-14'>IT Department</span>
                        </div>
                      </div>
                    </td>
                    <td>PART TIME</td>
                    <td>Junior UI Designer</td>
                    <td>
                      <div className='d-flex'>
                        <a className='contact-icon' href='#'>
                          <i className='las la-envelope' />
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className='d-flex align-items-center'>
                        <a
                          className='btn rounded btn-outline-warning mr-3 ml-auto'
                          href='#'>
                          On-Hold
                        </a>
                        <Dropdown className='dropdown float-right custom-dropdown mb-0'>
                          <Dropdown.Toggle
                            className='i-false'
                            data-toggle='dropdown'
                            variant=''>
                            <svg
                              width={24}
                              height={24}
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'>
                              <path
                                d='M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z'
                                stroke='#2E2E2E'
                                strokeWidth={2}
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                              <path
                                d='M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z'
                                stroke='#2E2E2E'
                                strokeWidth={2}
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                              <path
                                d='M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z'
                                stroke='#2E2E2E'
                                strokeWidth={2}
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                            </svg>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className='dropdown-menu dropdown-menu-right'>
                            <Dropdown.Item className='dropdown-item'>
                              Details
                            </Dropdown.Item>
                            <Dropdown.Item className='dropdown-item text-danger'>
                              Cancel
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr role='row' className='odd'>
                    <td className='application_sorting_1'>
                      <div className='checkbox mr-0 align-self-center'>
                        <div className='custom-control custom-checkbox '>
                          <input
                            onClick={() => handleCheckbox()}
                            type='checkbox'
                            className='custom-control-input'
                            id='check3'
                            required
                          />
                          <label className='custom-control-label' htmlFor='check3' />
                        </div>
                      </div>
                    </td>
                    <td>#APL-0003</td>
                    <td>June 1, 2020, 08:22 AM</td>
                    <td>
                      <div className='media'>
                        <svg
                          className='mr-3'
                          width={50}
                          height={50}
                          viewBox='0 0 50 50'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            d='M0 7.27273C0 3.25611 3.25611 0 7.27273 0H42.7273C46.7439 0 50 3.25611 50 7.27273V42.7273C50 46.7439 46.7439 50 42.7273 50H7.27273C3.25611 50 0 46.7439 0 42.7273V7.27273Z'
                            fill='#D3D3D3'
                          />
                          <path
                            d='M0 7.27273C0 3.25611 3.25611 0 7.27273 0H42.7273C46.7439 0 50 3.25611 50 7.27273V42.7273C50 46.7439 46.7439 50 42.7273 50H7.27273C3.25611 50 0 46.7439 0 42.7273V7.27273Z'
                            fill='#F0780A'
                          />
                          <path
                            d='M12.8885 12.8887C14.4638 11.3134 16.3339 10.0639 18.3921 9.21132C20.4503 8.35878 22.6563 7.91999 24.884 7.91999C27.1118 7.91999 29.3178 8.35878 31.376 9.21132C33.4342 10.0639 35.3043 11.3134 36.8796 12.8887C38.4549 14.464 39.7045 16.3341 40.557 18.3923C41.4095 20.4505 41.8483 22.6565 41.8483 24.8843C41.8483 27.1121 41.4095 29.318 40.557 31.3762C39.7045 33.4344 38.4549 35.3046 36.8796 36.8798L30.8818 30.8821C31.6695 30.0944 32.2942 29.1594 32.7205 28.1303C33.1468 27.1011 33.3662 25.9982 33.3662 24.8843C33.3662 23.7704 33.1468 22.6674 32.7205 21.6383C32.2942 20.6092 31.6695 19.6741 30.8818 18.8865C30.0942 18.0989 29.1591 17.4741 28.13 17.0478C27.1009 16.6215 25.9979 16.4021 24.884 16.4021C23.7701 16.4021 22.6672 16.6215 21.6381 17.0478C20.609 17.4741 19.6739 18.0989 18.8863 18.8865L12.8885 12.8887Z'
                            fill='white'
                          />
                          <path
                            d='M12.8885 36.8798C9.70705 33.6984 7.91975 29.3835 7.91975 24.8843C7.91975 20.385 9.70705 16.0701 12.8885 12.8887C16.0699 9.70727 20.3848 7.91997 24.884 7.91996C29.3832 7.91996 33.6982 9.70726 36.8796 12.8887L30.8818 18.8865C29.2911 17.2958 27.1336 16.4021 24.884 16.4021C22.6344 16.4021 20.477 17.2958 18.8863 18.8865C17.2955 20.4772 16.4019 22.6346 16.4019 24.8843C16.4019 27.1339 17.2955 29.2913 18.8863 30.882L12.8885 36.8798Z'
                            fill='white'
                          />
                        </svg>
                        <div className='media-body text-nowrap'>
                          <h6 className='text-black font-w600 fs-16 mb-0'>
                            Mosciski Inc.
                          </h6>
                          <span className='fs-14'>Creative Design Agency</span>
                        </div>
                      </div>
                    </td>
                    <td>FREELANCE</td>
                    <td>Intern UI Designer</td>
                    <td>
                      <div className='d-flex'>
                        <a className='contact-icon mr-3' href='#'>
                          <i className='fa fa-phone' aria-hidden='true' />
                        </a>
                        <a className='contact-icon' href='#'>
                          <i className='las la-envelope' />
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className='d-flex align-items-center'>
                        <a className='btn rounded btn-outline-dark mr-3 ml-auto' href='#'>
                          Pending
                        </a>
                        <Dropdown className='dropdown float-right custom-dropdown mb-0'>
                          <Dropdown.Toggle
                            className='i-false'
                            data-toggle='dropdown'
                            variant=''>
                            <svg
                              width={24}
                              height={24}
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'>
                              <path
                                d='M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z'
                                stroke='#2E2E2E'
                                strokeWidth={2}
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                              <path
                                d='M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z'
                                stroke='#2E2E2E'
                                strokeWidth={2}
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                              <path
                                d='M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z'
                                stroke='#2E2E2E'
                                strokeWidth={2}
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                            </svg>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className='dropdown-menu dropdown-menu-right'>
                            <Dropdown.Item className='dropdown-item'>
                              Details
                            </Dropdown.Item>
                            <Dropdown.Item className='dropdown-item text-danger'>
                              Cancel
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr role='row' className='even'>
                    <td className='application_sorting_1'>
                      <div className='checkbox mr-0 align-self-center'>
                        <div className='custom-control custom-checkbox '>
                          <input
                            onClick={() => handleCheckbox()}
                            type='checkbox'
                            className='custom-control-input'
                            id='check4'
                            required
                          />
                          <label className='custom-control-label' htmlFor='check4' />
                        </div>
                      </div>
                    </td>
                    <td>#APL-0004</td>
                    <td>June 1, 2020, 08:22 AM</td>
                    <td>
                      <div className='media'>
                        <svg
                          className='mr-3'
                          width={50}
                          height={50}
                          viewBox='0 0 50 50'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            d='M0 7.27273C0 3.25611 3.25611 0 7.27273 0H42.7273C46.7439 0 50 3.25611 50 7.27273V42.7273C50 46.7439 46.7439 50 42.7273 50H7.27273C3.25611 50 0 46.7439 0 42.7273V7.27273Z'
                            fill='#D3D3D3'
                          />
                          <path
                            d='M0 7.27273C0 3.25611 3.25611 0 7.27273 0H42.7273C46.7439 0 50 3.25611 50 7.27273V42.7273C50 46.7439 46.7439 50 42.7273 50H7.27273C3.25611 50 0 46.7439 0 42.7273V7.27273Z'
                            fill='#BB1D85'
                          />
                          <path
                            d='M12.8883 36.8797C11.313 35.3045 10.0635 33.4343 9.21092 31.3761C8.35839 29.3179 7.91959 27.112 7.91959 24.8842C7.91959 22.6564 8.35839 20.4504 9.21092 18.3922C10.0635 16.334 11.313 14.4639 12.8883 12.8886C14.4636 11.3133 16.3337 10.0638 18.3919 9.21123C20.4501 8.3587 22.6561 7.9199 24.8839 7.9199C27.1117 7.9199 29.3176 8.3587 31.3758 9.21123C33.434 10.0638 35.3042 11.3133 36.8794 12.8886L30.8817 18.8864C30.094 18.0988 29.159 17.474 28.1299 17.0477C27.1008 16.6214 25.9978 16.402 24.8839 16.402C23.77 16.402 22.667 16.6214 21.6379 17.0477C20.6088 17.474 19.6737 18.0988 18.8861 18.8864C18.0985 19.674 17.4737 20.6091 17.0474 21.6382C16.6211 22.6673 16.4017 23.7703 16.4017 24.8842C16.4017 25.9981 16.6211 27.1011 17.0474 28.1302C17.4737 29.1593 18.0985 30.0943 18.8861 30.882L12.8883 36.8797Z'
                            fill='white'
                          />
                          <path
                            d='M36.8795 36.8797C33.6981 40.0612 29.3832 41.8485 24.8839 41.8485C20.3847 41.8485 16.0698 40.0612 12.8884 36.8797C9.70697 33.6983 7.91966 29.3834 7.91966 24.8842C7.91966 20.385 9.70696 16.0701 12.8884 12.8886L18.8862 18.8864C17.2955 20.4771 16.4018 22.6346 16.4018 24.8842C16.4018 27.1338 17.2955 29.2913 18.8862 30.882C20.4769 32.4727 22.6343 33.3663 24.8839 33.3663C27.1335 33.3663 29.291 32.4727 30.8817 30.882L36.8795 36.8797Z'
                            fill='white'
                          />
                        </svg>
                        <div className='media-body text-nowrap'>
                          <h6 className='text-black font-w600 fs-16 mb-0'>
                            Mosciski Inc.
                          </h6>
                          <span className='fs-14'>Creative Design Agency</span>
                        </div>
                      </div>
                    </td>
                    <td>FREELANCE</td>
                    <td>Intern UI Designer</td>
                    <td>
                      <div className='d-flex'>
                        <a className='contact-icon' href='#'>
                          <i className='fa fa-phone' aria-hidden='true' />
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className='d-flex align-items-center'>
                        <a className='btn rounded btn-outline-dark mr-3 ml-auto' href='#'>
                          Pending
                        </a>
                        <Dropdown className='dropdown float-right custom-dropdown mb-0'>
                          <Dropdown.Toggle
                            className='i-false'
                            variant=''
                            data-toggle='dropdown'>
                            <svg
                              width={24}
                              height={24}
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'>
                              <path
                                d='M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z'
                                stroke='#2E2E2E'
                                strokeWidth={2}
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                              <path
                                d='M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z'
                                stroke='#2E2E2E'
                                strokeWidth={2}
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                              <path
                                d='M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z'
                                stroke='#2E2E2E'
                                strokeWidth={2}
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                            </svg>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className='dropdown-menu dropdown-menu-right'>
                            <Dropdown.Item className='dropdown-item'>
                              Details
                            </Dropdown.Item>
                            <Dropdown.Item className='dropdown-item text-danger'>
                              Cancel
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr role='row' className='odd'>
                    <td className='application_sorting_1'>
                      <div className='checkbox mr-0 align-self-center'>
                        <div className='custom-control custom-checkbox '>
                          <input
                            onClick={() => handleCheckbox()}
                            type='checkbox'
                            className='custom-control-input'
                            id='check6'
                            required
                          />
                          <label className='custom-control-label' htmlFor='check6' />
                        </div>
                      </div>
                    </td>
                    <td>#APL-0005</td>
                    <td>June 1, 2020, 08:22 AM</td>
                    <td>
                      <div className='media'>
                        <svg
                          className='mr-3'
                          width={50}
                          height={50}
                          viewBox='0 0 50 50'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            d='M0 7.27273C0 3.25611 3.25611 0 7.27273 0H42.7273C46.7439 0 50 3.25611 50 7.27273V42.7273C50 46.7439 46.7439 50 42.7273 50H7.27273C3.25611 50 0 46.7439 0 42.7273V7.27273Z'
                            fill='#D3D3D3'
                          />
                          <path
                            d='M0 7.27273C0 3.25611 3.25611 0 7.27273 0H42.7273C46.7439 0 50 3.25611 50 7.27273V42.7273C50 46.7439 46.7439 50 42.7273 50H7.27273C3.25611 50 0 46.7439 0 42.7273V7.27273Z'
                            fill='#31B52F'
                          />
                          <path
                            d='M12.8885 12.8887C14.4638 11.3134 16.3339 10.0639 18.3921 9.21132C20.4503 8.35878 22.6563 7.91999 24.884 7.91999C27.1118 7.91999 29.3178 8.35878 31.376 9.21132C33.4342 10.0639 35.3043 11.3134 36.8796 12.8887C38.4549 14.464 39.7045 16.3341 40.557 18.3923C41.4095 20.4505 41.8483 22.6565 41.8483 24.8843C41.8483 27.1121 41.4095 29.318 40.557 31.3762C39.7045 33.4344 38.4549 35.3046 36.8796 36.8798L30.8818 30.8821C31.6695 30.0944 32.2942 29.1594 32.7205 28.1303C33.1468 27.1011 33.3662 25.9982 33.3662 24.8843C33.3662 23.7704 33.1468 22.6674 32.7205 21.6383C32.2942 20.6092 31.6695 19.6741 30.8818 18.8865C30.0942 18.0989 29.1591 17.4741 28.13 17.0478C27.1009 16.6215 25.9979 16.4021 24.884 16.4021C23.7701 16.4021 22.6672 16.6215 21.6381 17.0478C20.609 17.4741 19.6739 18.0989 18.8863 18.8865L12.8885 12.8887Z'
                            fill='white'
                          />
                          <path
                            d='M12.8885 36.8798C9.70705 33.6984 7.91975 29.3835 7.91975 24.8843C7.91975 20.385 9.70705 16.0701 12.8885 12.8887C16.0699 9.70727 20.3848 7.91997 24.884 7.91996C29.3832 7.91996 33.6982 9.70726 36.8796 12.8887L30.8818 18.8865C29.2911 17.2958 27.1336 16.4021 24.884 16.4021C22.6344 16.4021 20.477 17.2958 18.8863 18.8865C17.2955 20.4772 16.4019 22.6346 16.4019 24.8843C16.4019 27.1339 17.2955 29.2913 18.8863 30.882L12.8885 36.8798Z'
                            fill='white'
                          />
                        </svg>
                        <div className='media-body text-nowrap'>
                          <h6 className='text-black font-w600 fs-16 mb-0'>
                            Highspeed Studios
                          </h6>
                          <span className='fs-14'>Creative Design Agency</span>
                        </div>
                      </div>
                    </td>
                    <td>FULLTIME</td>
                    <td>Senior UX Designer</td>
                    <td>
                      <div className='d-flex'>
                        <a className='contact-icon mr-3' href='#'>
                          <i className='fa fa-phone' aria-hidden='true' />
                        </a>
                        <a className='contact-icon' href='#'>
                          <i className='las la-envelope' />
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className='d-flex align-items-center'>
                        <a className='btn rounded btn-success mr-3 ml-auto' href='#'>
                          Candidate
                        </a>
                        <Dropdown className='dropdown float-right custom-dropdown mb-0'>
                          <Dropdown.Toggle
                            className='i-false'
                            data-toggle='dropdown'
                            variant=''>
                            <svg
                              width={24}
                              height={24}
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'>
                              <path
                                d='M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z'
                                stroke='#2E2E2E'
                                strokeWidth={2}
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                              <path
                                d='M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z'
                                stroke='#2E2E2E'
                                strokeWidth={2}
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                              <path
                                d='M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z'
                                stroke='#2E2E2E'
                                strokeWidth={2}
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                            </svg>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className='dropdown-menu dropdown-menu-right'>
                            <Dropdown.Item className='dropdown-item'>
                              Details
                            </Dropdown.Item>
                            <Dropdown.Item className='dropdown-item text-danger'>
                              Cancel
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr role='row' className='even'>
                    <td className='application_sorting_1'>
                      <div className='checkbox mr-0 align-self-center'>
                        <div className='custom-control custom-checkbox '>
                          <input
                            onClick={() => handleCheckbox()}
                            type='checkbox'
                            className='custom-control-input'
                            id='check7'
                            required
                          />
                          <label className='custom-control-label' htmlFor='check7' />
                        </div>
                      </div>
                    </td>
                    <td>#APL-0006</td>
                    <td>June 1, 2020, 08:22 AM</td>
                    <td>
                      <div className='media'>
                        <svg
                          className='mr-3'
                          width={50}
                          height={50}
                          viewBox='0 0 50 50'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            d='M0 7.27273C0 3.25611 3.25611 0 7.27273 0H42.7273C46.7439 0 50 3.25611 50 7.27273V42.7273C50 46.7439 46.7439 50 42.7273 50H7.27273C3.25611 50 0 46.7439 0 42.7273V7.27273Z'
                            fill='#D3D3D3'
                          />
                          <path
                            d='M0 7.27273C0 3.25611 3.25611 0 7.27273 0H42.7273C46.7439 0 50 3.25611 50 7.27273V42.7273C50 46.7439 46.7439 50 42.7273 50H7.27273C3.25611 50 0 46.7439 0 42.7273V7.27273Z'
                            fill='#515151'
                          />
                          <path
                            d='M12.889 12.8887C14.4642 11.3134 16.3344 10.0638 18.3926 9.21131C20.4508 8.35877 22.6567 7.91998 24.8845 7.91998C27.1123 7.91998 29.3183 8.35878 31.3765 9.21131C33.4347 10.0638 35.3048 11.3134 36.8801 12.8887C38.4554 14.464 39.7049 16.3341 40.5575 18.3923C41.41 20.4505 41.8488 22.6565 41.8488 24.8843C41.8488 27.1121 41.41 29.318 40.5575 31.3762C39.7049 33.4344 38.4554 35.3046 36.8801 36.8798L30.8823 30.882C31.6699 30.0944 32.2947 29.1593 32.721 28.1302C33.1473 27.1011 33.3667 25.9982 33.3667 24.8843C33.3667 23.7704 33.1473 22.6674 32.721 21.6383C32.2947 20.6092 31.6699 19.6741 30.8823 18.8865C30.0947 18.0988 29.1596 17.4741 28.1305 17.0478C27.1014 16.6215 25.9984 16.4021 24.8845 16.4021C23.7706 16.4021 22.6676 16.6215 21.6385 17.0478C20.6094 17.4741 19.6744 18.0988 18.8867 18.8865L12.889 12.8887Z'
                            fill='white'
                          />
                          <path
                            d='M36.8801 12.8887C40.0615 16.0701 41.8488 20.385 41.8488 24.8842C41.8488 29.3835 40.0615 33.6984 36.8801 36.8798C33.6987 40.0612 29.3837 41.8485 24.8845 41.8485C20.3853 41.8485 16.0704 40.0612 12.889 36.8798L18.8867 30.882C20.4775 32.4727 22.6349 33.3664 24.8845 33.3664C27.1341 33.3664 29.2916 32.4727 30.8823 30.882C32.473 29.2913 33.3667 27.1339 33.3667 24.8842C33.3667 22.6346 32.473 20.4772 30.8823 18.8865L36.8801 12.8887Z'
                            fill='white'
                          />
                        </svg>
                        <div className='media-body text-nowrap'>
                          <h6 className='text-black font-w600 fs-16 mb-0'>Funk Inc.</h6>
                          <span className='fs-14'>IT Department</span>
                        </div>
                      </div>
                    </td>
                    <td>PART TIME</td>
                    <td>Junior UI Designer</td>
                    <td>
                      <div className='d-flex'>
                        <a className='contact-icon' href='#'>
                          <i className='fa fa-phone' aria-hidden='true' />
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className='d-flex align-items-center'>
                        <a
                          className='btn rounded btn-outline-warning mr-3 ml-auto'
                          href='#'>
                          On-Hold
                        </a>
                        <Dropdown className='dropdown float-right custom-dropdown mb-0'>
                          <Dropdown.Toggle
                            className='i-false'
                            data-toggle='dropdown'
                            variant=''>
                            <svg
                              width={24}
                              height={24}
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'>
                              <path
                                d='M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z'
                                stroke='#2E2E2E'
                                strokeWidth={2}
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                              <path
                                d='M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z'
                                stroke='#2E2E2E'
                                strokeWidth={2}
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                              <path
                                d='M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z'
                                stroke='#2E2E2E'
                                strokeWidth={2}
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                            </svg>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className='dropdown-menu dropdown-menu-right'>
                            <Dropdown.Item className='dropdown-item'>
                              Details
                            </Dropdown.Item>
                            <Dropdown.Item className='dropdown-item text-danger'>
                              Cancel
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className='d-sm-flex text-center justify-content-between align-items-center'>
                <div className='dataTables_info' id='example5_info'>
                  Showing {activePag.current * sort + 1} to{' '}
                  {data.length > (activePag.current + 1) * sort
                    ? (activePag.current + 1) * sort
                    : data.length}{' '}
                  of {data.length} entries
                </div>

                <div
                  className='dataTables_paginate paging_simple_numbers'
                  id='example5_paginate'>
                  <Link
                    to='/application'
                    className='paginate_button previous disabled'
                    onClick={() =>
                      activePag.current > 0 && onClick(activePag.current - 1)
                    }>
                    Previous
                  </Link>
                  <span>
                    {paggination.map((number, i) => (
                      <Link
                        key={i}
                        to='/application'
                        className={`paginate_button  ${
                          activePag.current === i ? 'current' : ''
                        } `}
                        onClick={() => onClick(i)}>
                        {number}
                      </Link>
                    ))}
                  </span>
                  <Link
                    to='/application'
                    className='paginate_button next'
                    onClick={() =>
                      activePag.current + 1 < paggination.length &&
                      onClick(activePag.current + 1)
                    }>
                    Next
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Application;
