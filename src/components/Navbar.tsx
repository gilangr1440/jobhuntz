import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useAuthCookie } from "../utils/contexts/newAuth";
import company from "../assets/company.jpg";
// import { useAuthCookieCompany } from "../utils/contexts/newAuth_company";

const Navbar = () => {
  // const { token, changeToken } = useAuth();
  const { js } = useAuthCookie();
  const [cookies, setCookie, removeCookie] = useCookies<any>(["id", "token", "role"]);
  // const { tokenCompany, changeTokenCompany } = useAuthCookieCompany();
  // const { tokenCookie } = useAuthCookie();
  const navigate = useNavigate();
  // console.log(cookies.role);

  const handleLogout = () => {
    setCookie("logout", undefined, { path: "/" });
    removeCookie("id", { path: "/" });
    removeCookie("token", { path: "/" });
    removeCookie("role", { path: "/" });
    Swal.fire({
      position: "center",
      icon: "success",
      title: `Berhasil keluar`,
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/role");
  };

  const handleLogoutCompany = () => {
    setCookie("logout", undefined, { path: "/" });
    removeCookie("id", { path: "/" });
    removeCookie("token", { path: "/" });
    removeCookie("role", { path: "/" });
    Swal.fire({
      position: "center",
      icon: "success",
      title: `Berhasil keluar`,
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/role");
  };

  return (
    <>
      <div className="navbar bg-main px-10">
        <div className="flex-1">
          <Link to={"/"} className="btn btn-ghost text-xl text-white">
            JobHuntz
          </Link>
        </div>
        {cookies.role == "jobseeker" ? (
          <div className={`flex-none ${cookies.role == "company" && "hidden"}`}>
            <ul className="hidden sm:flex gap-5 text-white mx-5">
              <li>
                <Link to={"/lowongantersimpan"}>Disimpan</Link>
              </li>
              <li>
                <Link to={"/riwayatlamaran"}>Riwayat</Link>
              </li>
              <li>
                <Link to={"/chat"}>Pesan</Link>
              </li>
            </ul>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS Navbar component" src={js.banners} />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <Link to={"/profileuser"} className="justify-between">
                    Profile
                  </Link>
                </li>
                <li onClick={handleLogout}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className={`flex-none ${cookies.role == "company" && "hidden"}`}>
            <Link to={"/role"} className="btn bg-[#FE7A36] border-none text-white">
              Daftar
            </Link>
          </div>
        )}

        {cookies.role == "company" && (
          <div className="flex-none">
            <ul className="hidden sm:flex gap-5 text-white mx-5">
              <li>
                <Link to={"/chat"}>Pesan</Link>
              </li>
              <li>
                <Link to={"/daftarlowongan"}>Daftar Lowongan</Link>
              </li>
            </ul>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS Navbar component" src={company} />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <Link to={"/profilecompany"} className="justify-between">
                    Profile
                  </Link>
                </li>

                <li onClick={handleLogoutCompany}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
