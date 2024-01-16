import React from 'react'
import Swal from 'sweetalert2';

const AlertUnit = (title : string) => {
  Swal.fire({
    icon: 'info',
    width: '400px',
    title: `<span style="font-size: 20px; font-weight : bolder;"> ${title}</span>`,
    confirmButtonText: '확인',
    showLoaderOnConfirm: true,
    allowOutsideClick: () => !Swal.isLoading(),
    reverseButtons: true,
  });
};

export default AlertUnit