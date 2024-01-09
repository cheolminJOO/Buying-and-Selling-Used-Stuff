import { Modal } from "antd"
import { useState } from "react"
import DaumPostcodeEmbed from 'react-daum-postcode';

export default function() {
  const [isModalOpen, setIsModalOpen]  = useState(false)
  const toggleBtn = () => {
      setIsModalOpen((prev) => !prev)
  }
  const Postcode = () => {
    const handleComplete = (data) => {
      let fullAddress = data.address;
      let extraAddress = '';
  
      if (data.addressType === 'R') {
        if (data.bname !== '') {
          extraAddress += data.bname;
        }
        if (data.buildingName !== '') {
          extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
        }
        fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
      }
  
      console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    };
  
    return <DaumPostcodeEmbed onComplete={handleComplete} />;
  };





  return(
    
    <div>
        <button onClick={toggleBtn}>clicklick click lick</button>
      {isModalOpen && (
        <div>
              <Modal title = "안녕하십니까"
              open = {isModalOpen}
              onOk={toggleBtn}
              onCancel={toggleBtn}
              >
               <DaumPostcodeEmbed onComplete={toggleBtn}/>
              </Modal>
        </div>
               )}

      
    </div>
  )
}