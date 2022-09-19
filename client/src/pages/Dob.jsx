import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/actions/userAction";
import dob from "../assets/dob.jpeg";

const Dob = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState({
    day: 0,
    month: 0,
    year: 0,
  });
  const handleState = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  // const userRegister = useSelector((state) => state.useRegister);

  const handleSubmit = () => {
    const { day, month, year } = state;
    if (day && month && year) {
      const date_of_birth = `${year}-${month}-${day}`;
      const { fullname, username, email, password } = location.state;

      dispatch(register(fullname, username, email, password, date_of_birth));
      // console.log("userInfo", userRegister);
      setState({
        day: 0,
        month: 0,
        year: 0,
      });
      navigate("/email-verify");
    }
  };
  return (
    <div className="h-screen bg-gray-50 overflow-scroll flex flex-row justify-center items-center">
      <div>
        <img src={`${dob}`} alt="error" />
      </div>
      <div>
        <div className="bg-white border border-gray-300 w-96 h-full py-8 px-4 flex items-center flex-col mb-3 gap-2">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex flex-col justify-center">
              <h1 className="bg-no-repeat instagram-logo text-center" />
              <p className="text-center font-normal text-lg">
                Add your date of birth
              </p>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <div className="flex flex-col">
                <p className="text-center text-base text-[#3d3d3d]">
                  This won't be part of your public profile
                </p>
                <p className="text-center text-[#1fabeb] text-base">
                  Why do i need to provide my date of birth ?
                </p>
              </div>
              <div className="flex flex-row justify-evenly text-[#a0a7b4]">
                <select
                  id="month"
                  onChange={handleState}
                  className="border border-gray-300 py-1 px-1 rounded text-base text-center"
                  title="Month:"
                  name="month"
                >
                  <option title="January" value="1">
                    January
                  </option>
                  <option title="February" value="2">
                    February
                  </option>
                  <option title="March" value="3">
                    March
                  </option>
                  <option title="April" value="4">
                    April
                  </option>
                  <option title="May" value="5">
                    May
                  </option>
                  <option title="June" value="6">
                    June
                  </option>
                  <option title="July" value="7">
                    July
                  </option>
                  <option title="August" value="8">
                    August
                  </option>
                  <option title="September" value="9">
                    September
                  </option>
                  <option title="October" value="10">
                    October
                  </option>
                  <option title="November" value="11">
                    November
                  </option>
                  <option title="December" value="12">
                    December
                  </option>
                </select>
                <select
                  id="day"
                  onChange={handleState}
                  className="border border-gray-300 py-1 px-1 rounded text-base text-center"
                  title="Day:"
                  name="day"
                >
                  <option title="1" value="1">
                    1
                  </option>
                  <option title="2" value="2">
                    2
                  </option>
                  <option title="3" value="3">
                    3
                  </option>
                  <option title="4" value="4">
                    4
                  </option>
                  <option title="5" value="5">
                    5
                  </option>
                  <option title="6" value="6">
                    6
                  </option>
                  <option title="7" value="7">
                    7
                  </option>
                  <option title="8" value="8">
                    8
                  </option>
                  <option title="9" value="9">
                    9
                  </option>
                  <option title="10" value="10">
                    10
                  </option>
                  <option title="11" value="11">
                    11
                  </option>
                  <option title="12" value="12">
                    12
                  </option>
                  <option title="13" value="13">
                    13
                  </option>
                  <option title="14" value="14">
                    14
                  </option>
                  <option title="15" value="15">
                    15
                  </option>
                  <option title="16" value="16">
                    16
                  </option>
                  <option title="17" value="17">
                    17
                  </option>
                  <option title="18" value="18">
                    18
                  </option>
                  <option title="19" value="19">
                    19
                  </option>
                  <option title="20" value="20">
                    20
                  </option>
                  <option title="21" value="21">
                    21
                  </option>
                  <option title="22" value="22">
                    22
                  </option>
                  <option title="23" value="23">
                    23
                  </option>
                  <option title="24" value="24">
                    24
                  </option>
                  <option title="25" value="25">
                    25
                  </option>
                  <option title="26" value="26">
                    26
                  </option>
                  <option title="27" value="27">
                    27
                  </option>
                  <option title="28" value="28">
                    28
                  </option>
                  <option title="29" value="29">
                    29
                  </option>
                  <option title="30" value="30">
                    30
                  </option>
                </select>
                <select
                  id="year"
                  onChange={handleState}
                  className="border border-gray-300 py-1 px-1 rounded text-base text-center"
                  title="Year:"
                  name="year"
                >
                  <option title="2022" value="2022">
                    2022
                  </option>
                  <option title="2021" value="2021">
                    2021
                  </option>
                  <option title="2020" value="2020">
                    2020
                  </option>
                  <option title="2019" value="2019">
                    2019
                  </option>
                  <option title="2018" value="2018">
                    2018
                  </option>
                  <option title="2017" value="2017">
                    2017
                  </option>
                  <option title="2016" value="2016">
                    2016
                  </option>
                  <option title="2015" value="2015">
                    2015
                  </option>
                  <option title="2014" value="2014">
                    2014
                  </option>
                  <option title="2013" value="2013">
                    2013
                  </option>
                  <option title="2012" value="2012">
                    2012
                  </option>
                  <option title="2011" value="2011">
                    2011
                  </option>
                  <option title="2010" value="2010">
                    2010
                  </option>
                  <option title="2009" value="2009">
                    2009
                  </option>
                  <option title="2008" value="2008">
                    2008
                  </option>
                  <option title="2007" value="2007">
                    2007
                  </option>
                  <option title="2006" value="2006">
                    2006
                  </option>
                  <option title="2005" value="2005">
                    2005
                  </option>
                  <option title="2004" value="2004">
                    2004
                  </option>
                  <option title="2003" value="2003">
                    2003
                  </option>
                  <option title="2002" value="2002">
                    2002
                  </option>
                  <option title="2001" value="2001">
                    2001
                  </option>
                  <option title="2000" value="2000">
                    2000
                  </option>
                  <option title="1999" value="1999">
                    1999
                  </option>
                  <option title="1998" value="1998">
                    1998
                  </option>
                  <option title="1997" value="1997">
                    1997
                  </option>
                  <option title="1996" value="1996">
                    1996
                  </option>
                  <option title="1995" value="1995">
                    1995
                  </option>
                  <option title="1994" value="1994">
                    1994
                  </option>
                  <option title="1993" value="1993">
                    1993
                  </option>
                  <option title="1992" value="1992">
                    1992
                  </option>
                  <option title="1991" value="1991">
                    1991
                  </option>
                  <option title="1990" value="1990">
                    1990
                  </option>
                  <option title="1989" value="1989">
                    1989
                  </option>
                  <option title="1988" value="1988">
                    1988
                  </option>
                  <option title="1987" value="1987">
                    1987
                  </option>
                  <option title="1986" value="1986">
                    1986
                  </option>
                  <option title="1985" value="1985">
                    1985
                  </option>
                  <option title="1984" value="1984">
                    1984
                  </option>
                  <option title="1983" value="1983">
                    1983
                  </option>
                  <option title="1982" value="1982">
                    1982
                  </option>
                  <option title="1981" value="1981">
                    1981
                  </option>
                  <option title="1980" value="1980">
                    1980
                  </option>
                  <option title="1979" value="1979">
                    1979
                  </option>
                  <option title="1978" value="1978">
                    1978
                  </option>
                  <option title="1977" value="1977">
                    1977
                  </option>
                  <option title="1976" value="1976">
                    1976
                  </option>
                  <option title="1975" value="1975">
                    1975
                  </option>
                  <option title="1974" value="1974">
                    1974
                  </option>
                  <option title="1973" value="1973">
                    1973
                  </option>
                  <option title="1972" value="1972">
                    1972
                  </option>
                  <option title="1971" value="1971">
                    1971
                  </option>
                  <option title="1970" value="1970">
                    1970
                  </option>
                  <option title="1969" value="1969">
                    1969
                  </option>
                  <option title="1968" value="1968">
                    1968
                  </option>
                  <option title="1967" value="1967">
                    1967
                  </option>
                  <option title="1966" value="1966">
                    1966
                  </option>
                  <option title="1965" value="1965">
                    1965
                  </option>
                  <option title="1964" value="1964">
                    1964
                  </option>
                  <option title="1963" value="1963">
                    1963
                  </option>
                  <option title="1962" value="1962">
                    1962
                  </option>
                  <option title="1961" value="1961">
                    1961
                  </option>
                  <option title="1960" value="1960">
                    1960
                  </option>
                  <option title="1959" value="1959">
                    1959
                  </option>
                  <option title="1958" value="1958">
                    1958
                  </option>
                  <option title="1957" value="1957">
                    1957
                  </option>
                  <option title="1956" value="1956">
                    1956
                  </option>
                  <option title="1955" value="1955">
                    1955
                  </option>
                  <option title="1954" value="1954">
                    1954
                  </option>
                  <option title="1953" value="1953">
                    1953
                  </option>
                  <option title="1952" value="1952">
                    1952
                  </option>
                  <option title="1951" value="1951">
                    1951
                  </option>
                  <option title="1950" value="1950">
                    1950
                  </option>
                  <option title="1949" value="1949">
                    1949
                  </option>
                  <option title="1948" value="1948">
                    1948
                  </option>
                  <option title="1947" value="1947">
                    1947
                  </option>
                  <option title="1946" value="1946">
                    1946
                  </option>
                  <option title="1945" value="1945">
                    1945
                  </option>
                  <option title="1944" value="1944">
                    1944
                  </option>
                  <option title="1943" value="1943">
                    1943
                  </option>
                  <option title="1942" value="1942">
                    1942
                  </option>
                  <option title="1941" value="1941">
                    1941
                  </option>
                  <option title="1940" value="1940">
                    1940
                  </option>
                  <option title="1939" value="1939">
                    1939
                  </option>
                  <option title="1938" value="1938">
                    1938
                  </option>
                  <option title="1937" value="1937">
                    1937
                  </option>
                  <option title="1936" value="1936">
                    1936
                  </option>
                  <option title="1935" value="1935">
                    1935
                  </option>
                  <option title="1934" value="1934">
                    1934
                  </option>
                  <option title="1933" value="1933">
                    1933
                  </option>
                  <option title="1932" value="1932">
                    1932
                  </option>
                  <option title="1931" value="1931">
                    1931
                  </option>
                  <option title="1930" value="1930">
                    1930
                  </option>
                  <option title="1929" value="1929">
                    1929
                  </option>
                  <option title="1928" value="1928">
                    1928
                  </option>
                  <option title="1927" value="1927">
                    1927
                  </option>
                  <option title="1926" value="1926">
                    1926
                  </option>
                  <option title="1925" value="1925">
                    1925
                  </option>
                  <option title="1924" value="1924">
                    1924
                  </option>
                  <option title="1923" value="1923">
                    1923
                  </option>
                  <option title="1922" value="1922">
                    1922
                  </option>
                  <option title="1921" value="1921">
                    1921
                  </option>
                  <option title="1920" value="1920">
                    1920
                  </option>
                  <option title="1919" value="1919">
                    1919
                  </option>
                </select>
              </div>
              <p className="text-center text-sm text-[#a0a7b4]">
                You need to enter date you were born of{" "}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-center text-sm text-[#a0a7b4]">
                Use your own date of birth, even if this account is for a
                business, pet or something else
              </p>
            </div>
            <div className=" w-9/12">
              <button
                onClick={handleSubmit}
                className=" w-full text-sm text-center bg-blue-300 text-white py-2 rounded font-medium"
              >
                Next
              </button>
            </div>
            <div>
              <Link
                to="/register"
                className="text-base text-center text-[#309bf7] font-medium"
              >
                Go back
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white border  border-gray-300 text-center w-96 py-4 px-4">
            <span className="text-sm"> Have an account?</span>
            <Link to="/" className="ml-1 text-blue-500 text-sm font-semibold">
              Log in
            </Link>
          </div>
          <div className="mt-3 text-center">
            <span className="text-xs">Get the app</span>
            <div className="flex mt-3 space-x-2 justify-center ">
              <div className="bg-no-repeat apple-store-logo" />
              <div className="bg-no-repeat google-store-logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dob;
