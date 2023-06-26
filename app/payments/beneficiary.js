import React, { useEffect } from "react";

const Beneficiary = ({ accountNumber, accountName, bankCode, amount }) => {
  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization:
          "Bearer sk_test_fa778e10ad51f1b65356b04d23c9b4f9268ad392",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "nuban",
        name: accountName,
        account_number: accountNumber,
        bank_code: bankCode,
        currency: "NGN",
      }),
    };

    if ((accountName, accountNumber, bankCode)) {
      fetch("https://api.paystack.co/transferrecipient", requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    } else {
      console.log("waiting");
    }
  });

  return (
    <div>
      <div className="text-blue-950 text-sm  lg:text-base  bg-white p-3 mt-3 gap-3 flex flex-col">
        <p className="font-semibold title-case "> Verify Beneficiary Details</p>
        <p className="text-sm ">
          NAME {""}:{""} {accountName}
        </p>
        <p>
          A/N {""}: {""}
          {accountNumber}
        </p>
        <p>
          BANK CODE {""}: {""}
          {bankCode}
        </p>
        <p>
          REFERENCE CODE {""}: {""}
          {Math.floor(Math.random() * Math.pow(10, 16))}
        </p>
        <p>
          Amount {""}: {""}
          {"NGN" + " " + amount}
        </p>
      </div>
    </div>
  );
};

export default Beneficiary;
