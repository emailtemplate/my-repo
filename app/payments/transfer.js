"use client";
import { useEffect, useState } from "react";
import Bankcodes from "../bankcodes/page";
import Beneficiary from "./beneficiary";
import Link from "next/link";

const Transfer = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState();
  const [amount, setAmount] = useState();
  const [bankName, setBankName] = useState();
  const [bankcodes, setBankCodes] = useState();
  const [bankResults, setBankResults] = useState([]);
  const [results, setResults] = useState([]);
  const [err, setErr] = useState();
  const [tab, setTab] = useState(1);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization:
          "Bearer sk_test_fa778e10ad51f1b65356b04d23c9b4f9268ad392",
      },
    };

    fetch("https://api.paystack.co/bank", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        const Data = data.data.map((item) => [item.name, item.code]);

        setResults(Data);
      })
      .catch((error) => console.log(error.message));
  }, [,]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        Authorization:
          "Bearer sk_test_fa778e10ad51f1b65356b04d23c9b4f9268ad392",
      },
    };

    if (bankName !== null) {
      fetch(
        `https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=${bankName}`,
        options
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setAccountName(data.data.account_name);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      return <>Waiting..</>;
    }
  }, [bankName, accountNumber]);

  const handleProceed = () => {
    if (accountName !== undefined && amount !== undefined) {
      console.log(typeof accountName, accountName);
      setTab(2);
    } else {
      return alert("Verify Details before you proceed");
    }
  };

  const handleBeneficiary = () => {};

  // Call resolveBank function somewhere in your component

  return (
    <div>
      {tab === 1 ? (
        <div>
          <div className="mt-5">
            <label className="block" htmlFor="">
              Account Number
            </label>
            <input
              type="tel"
              name=""
              id=""
              value={accountNumber}
              onChange={(e) => {
                setAccountNumber(e.target.value);
              }}
              className="py-3 text-xs w-3/4 px-2 outline-none"
            />
          </div>
          <div className="mt-5">
            <label className="block" htmlFor="">
              Bank Code
            </label>
            <input
              type="text"
              name=""
              id=""
              value={bankName}
              onChange={(e) => {
                setBankName(e.target.value);
              }}
              // onClick={resolveBank}
              className="py-3 w-3/4 text-xs px-2 outline-none"
            />

            <div>
              <Bankcodes data={results} />
            </div>
          </div>

          <div className="mt-5">
            <label className="block" htmlFor="">
              Account Name
            </label>
            <p className="py-3 bg-white h-10 w-3/4 text-xs px-2 outline-none">
              {" "}
              {accountName !== null || accountName !== undefined ? (
                <span>{accountName}</span>
              ) : (
                <span>Loading..</span>
              )}
            </p>
          </div>

          <div className="mt-5">
            <label className="block" htmlFor="">
              Amount
            </label>
            <input
              type="number"
              name=""
              id=""
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              className="py-3 text-xs w-3/4 px-2 outline-none"
            />
          </div>

          <button
            onClick={handleProceed}
            className="py-2 px-4 bg-blue-950 rounded text-base text-semibold text-white mt-3"
          >
            Proceed
          </button>
        </div>
      ) : null}

      {tab === 2 ? (
        <>
          {accountName !== null &&
          accountNumber.length === 10 &&
          accountName !== null ? (
            <div>
              <Beneficiary
                accountName={accountName}
                accountNumber={accountNumber}
                bankCode={bankName}
                amount={amount}
              />

              <div className="flex justify-between">
                <button
                  onClick={() => {
                    setTab(1);
                  }}
                  className="py-2 px-4 bg-blue-950 rounded text-base text-semibold text-white mt-3"
                >
                  Go Back
                </button>
                <button
                  onClick={() => {
                    setTab(3);
                  }}
                  className="py-2 px-4 bg-blue-950 rounded text-base text-semibold text-white mt-3"
                >
                  Proceed
                </button>
              </div>
            </div>
          ) : (
            <div>Is Loading....</div>
          )}
        </>
      ) : null}

      <div>
        {tab === 3 ? (
          <>
            {accountName !== null && (
              <div className="bg-white px-5 py-2 mt-3">
                <div className="mt-7">
                  <h2 className=" mt-5 text-blue-950 text-justify ">
                    Send OTP to {accountName}
                  </h2>
                  <div className="mt-3 xl:mt-7">
                    <Link
                      href=""
                      className="text-center py-2 mb-3 rounded text-blue-950 text-base xl:text-base font-semibold tracking-wide xl:w-auto xl:my-0"
                    >
                      Click to Generate OTP
                    </Link>
                  </div>
                </div>{" "}
                <div className="flex justify-between">
                  <button
                    onClick={() => {
                      setTab(2);
                    }}
                    className="py-2 px-4 bg-blue-950 rounded text-base text-semibold text-white mt-3"
                  >
                    Go Back
                  </button>
                  <button className="py-2 px-4 bg-blue-950 rounded text-base text-semibold text-white mt-3">
                    Finish
                  </button>
                </div>
              </div>
            )}
          </>
        ) : null}
      </div>

      <div>
        {/* <button onClick={resolveBank}>click</button> */}
        {/* <button onClick={getBanks}>click me</button> */}
      </div>
    </div>
  );
};

export default Transfer;
