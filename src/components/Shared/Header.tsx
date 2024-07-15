import { useState } from "react";
import HeaderButton from "./HeaderButton";
import { Link } from "react-router-dom";

export default function Header() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="sticky w-full z-10 top-0">
      <nav className="w-full pt-4  rounded-b-[40px] flex  h-30 pb-4  bg-white max-[700px]:rounded-b-none">
        <div className="flex flex-row max-[1300px]:w-[80%] w-[85%] justify-center items-center gap-6 max-[760px]:w-full max-[760px]:justify-between max-[760px]:px-4 pl-[10%]">
          <ul className="flex flex-row  justify-center items-center gap-6 max-[760px]:w-full max-[760px]:justify-between ">
            <li className="max-[760px]:hidden">
              <Link to={"/products"} className="hover:font-bold">
                Products
              </Link>
            </li>
            <li className="max-[760px]:hidden">
              <Link to={"/about_us"} className="hover:font-bold">
                About Us
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="88"
                  height="88"
                  fill="none"
                  viewBox="0 0 88 88"
                >
                  <path fill="url(#a)" d="M0 0h88v88H0z" />
                  <defs>
                    <pattern
                      id="a"
                      width="1"
                      height="1"
                      patternContentUnits="objectBoundingBox"
                    >
                      <use href="#b" transform="scale(.00096)" />
                    </pattern>
                    <image
                      id="b"
                      width="1042"
                      height="1042"
                      data-name="LOGO CYBERDOIT letras-05.png"
                      href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABBIAAAQSCAYAAAASWNnGAAAACXBIWXMAAC4jAAAuIwF4pT92AAAgAElEQVR4nOzd73UbR5Y34Ft75jv1RiBuBNREIDgCcSIQHIHpCARFMFQEgiIYKgJDEZiMwGQEK0ZQ74cujmlZf5ok0NVd9Tzn8HhmdwxciUSz+1e3bqWccwAAAACM8T+1CwAAAACWQ5AAAAAAjCZIAAAAAEYTJAAAAACjCRIAAACA0QQJAAAAwGiCBAAAAGA0QQIAAAAwmiABAAAAGE2QAAAAAIwmSAAAAABGEyQAAAAAowkSAAAAgNEECQAAAMBoggQAAABgNEECAAAAMJogAQAAABhNkAAAAACMJkgAAAAARhMkAAAAAKMJEgAAAIDRBAkAAADAaIIEAAAAYDRBAgAAADCaIAEAAAAYTZAAAAAAjCZIAAAAAEYTJAAAAACjCRIAAACA0QQJAAAAwGiCBAAAAGA0QQIAAAAwmiABAAAAGE2QAAAAAIwmSAAAAABGEyQAAAAAowkSAAAAgNEECQAAAMBoggQAAABgNEECAAAAMJogAQAAABhNkAAAAACMJkgAAAAARhMkAAAAAKMJEgAAAIDRBAkAAADAaIIEAAAAYDRBAgAAADCaIAEAAAAYTZAAAAAAjCZIAAAAAEYTJAAAAACjCRIAAACA0QQJAAAAwGiCBAAAAGA0QQIAAAAwmiABAAAAGE2QAAAAAIwmSAAAAABGEyQAAAAAowkSAAAAgNEECQAAAMBoggQAAABgNEECAAAAMJogAQAAABhNkAAAAACMJkgAAAAARhMkAAAAAKMJEgAAAIDRBAkAAADAaIIEAAAAYDRBAgAAADCaIAEAAAAYTZAAAAAAjPaP2gUwfyml44i4//UsIl7c+5+8fOJbXEXE5/KfP0fEZfnPl+W/X+ecr5/4HgAAAOxByjnXroGZSCndBQSr8s9n8fSQYJ/uAoddRFxHxGXO+fJ7/wIAAAD7JUjoWErpLjRYxRAcPK9ZzxNcxRAuXEbETvcCAADA4QgSOlK2KJzGn+HBUb1qDuomhmBhF40HCyUMOo95dY481VVEXETEtuXv3ZRSSuv487Pf0uf+JiLOc87n+3rBlNIqIs4i4tW+XpPvuomhwyzir1vbdhEROefd5BV1pFwbziLipHIpLMvHGK69u9qFfE+5793E8Puvpd99c3d/y/Lu3j8/6yRuiyChceVBcx3DRXSpHQdPddexsG3tApZSuo62v68fIuIs5/z5h/9L/ialdBpD0NTyz0hExNuc8+apL5JSOouIfz+9HPbsNoaA4e7reu4PMHNXtjJeRFshNNP7Oee8rV3E15SQ7DwECHN0Ffeu6a7nyyVIaJDw4Ltu4s/V7kWHCuUh8T+165jAbUSc+kUzXnlI2EY/q+q3OednT3mBctP5fj/lMBHb2h4ppXQR/VwfOKx/5ZwvahdxX7kP/r12HTzIpxiu5xdLvz/viSChEeXBYV2+tCiOcxPDw9YiW+hTSpuIeFO7jgnNduVjTsq1YBedXQdyzumx/275O7sOK1dLdxcU7+b2YDMnZfvOb7XroBm3EXE8p87BlNJldPY7sDG3MVzLL1zL5+1/ahfA06SUVimlbUT8XwwtuS6c4z2P4UH8j5TSrqxIMl/nZZWB77sI14GHsn+2Dc8j4peI+E9K6XNKaVs6t/irs9oF0JSjGK6hs1DuE/wOXLajiHgdf72Wu/+bIUHCQqWU1iVx/S2GDxtP8zIi3pcL1qYM6GFejmLY78g3lDCsxz3PH5/47x/vowhm5f6N6HVK6dx1/b/ckLNvx7ULuGdVuwD26u5a/ntK6bI8/zxpKyP7I0hYkJTSs/KQex3DXl6J6/4dxZ9dCtuZ33juahdQwUudI19XfrFuatdRybZ2AczaXafCHymli9La3zOzk2iZh8x2ncTw/HNt0W8eBAkLcBcgxLCH9024CZjK65hxoFCGD17VrqOCjTT6q86iz2vDJ3soeYBXEfFb2c62ql0MAA+2pEW/pgkSZuwrAYI9vHXMOVDoca/r8+jzz/1N5eey17+TXv/cPM3LECgALN3dPfq5RabpCRJmqrRvX4cAYU5mFyiUroQPteuo4M1cvgczsYk+rxPvHBPFE90FCls3oQCL9UuULQ+1C+mJIGFmyikM1zHsAerxwWAJXkfE5YwuVpsYjsrpjcGL8d+j3HocuHoT/c6EYP9ex3ATqsMFYJmOYlhoutZpNg1BwkyklI5TSrsYTmHocZ/z0szmYpVzvo4+H6pf1f67n4lN7QIqOZvTueU04Sgi/l22O+hOAFim5zF0mtnucGCChMruzUH4I/o8tm3p7i5WFzUvVjnnTQwrtL3pMUD5r46PezRgkUN6GUN3wqp2IQA82i8xdBCvahfSKkFCReUH+zKGOQgs26sYbjxPK9awrvjetZz0ehxkx8c93kafP+tM6yiGkHhTuxAAHu1uwW9Tu5AWCRIqKF0I52EbQ2uOIuI/tboTyuDFj1O/7wz02rrW63GP52U7D0zhjUGMAIv3xra1/RMkTOxeF8IvlUvhcO66E1YV3vss+hu8eBSdHQHY8XGPN2UbD0zpdUS4AQVYtrttay9qF9IKQcKEdCF05a4tdtI9/B0PXuztOMhN9Hmqy7p2AXTrJIQJAEt3FMO1fF27kBYIEiZQTmTQhdCnX1JKl1PefBq82LaOj3v8ULbvQC3CBIDlO4qI98KEpxMkHFgZvncZww0IfTqJ6Vup1hO+11z0chzkpnYBFdxGn1s5mB9hAkAbhAlPJEg4oNLW/p/oswWZvzqKiN+numCVldtPU7zXzDTdldDxcY9nOefPtYuA4iQav9YAdEKY8ASChAMopzLswlYG/u79hHMT1hO9z5ycpJSaXLnu+LjHTznnbe0i4AuvHScG0ARhwiMJEvastK9fRp+rhozzyxTHiZXBi28P+R4ztWm07bjX4x6bDIZowpuyfRGAZRMmPIIgYY/K/uxd9Hmzz8NMdZzYefQ3ePEoGlu57/i4x7c558vaRcB3bDs7MQagVe+Fww8jSNiTkmL9FuYhMN7Bh3aVfeU9PoD+0tjN/Sb6u7bchH3ozN9RRGxrFwHAXmwnHo6+aIKEPSghwvvadbBIU4QJF9Hn4MVt7QL2oePjHg1YZCletjqbBaAzRxFx0egW2b0TJDxRSmkbQgSeZorjxNYHfO25etnIcZCb2gVU8LEEYLAUm8a6oAB69Twi3IOMIEh4ghIi9LhSyP4dNEzoePDitnYBT9HpcY+30ed2HJbtKGzFAWjFSyfz/Jgg4ZGECBzAocOETfQ3ePH5UluOOz7u8bwEX7A0rxrpggJgOJlnVbuIORMkPIIQgQM69DaH9YFed86Wehxkj8c9XpXAC5ZqU7sAAPbm4Me1L5kg4YGECEzgJIZjRPcu57yLiI+HeO0ZW9xxkB0f99jjn5m2vHQWOUAznsfC7iGnJEh4gLJXRojAFE5KaHUIZzHsQ+/JLws7zmcT/R33+K4EXbB0AjGAdvxii8PXCRJGKisMb2rXQVdep5T2Pryr7D/vcSjYIv7MnR73eBsSf9px4qYToCnb2gXMkSBhhJTSaTjikTp+OUSbbKeDF1+Wz/LcbWoXUMFZzvlz7SJgj9a1CwBgb547xeHvBAk/UNqht7XroGvvD7S6tT7Aa87drLsSOj3u8VPOeVu7CNiz1wZ0ATTlrMywohAkfEe5CdhFf3uVmZ+Lfe/x73Tw4twT5U3tAipY1y4ADmRduwAA9mZxw7sPTZDwfbsQIjAPR3GYI2jW0d/gxbM5rhSWgKO34x7flpkd0KJ17QIA2KvXuhL+JEj4hjIx/6R2HXDPSex5m03Zl77Z52suwFHMbItDCTZ6m/R+EzP7PsCencwxtATgSTa1C5gLQcJXlH3KvU1NZxle7bs1P+d8HhFX+3zNBXg9s+Mgz6O/7qe1AYt0YAkDXgEYT1dCIUj4Qnm4sErGnL05wOkDva2GR8zkc16uOb0Flx/LjA5o3ap2AQDs3aZ2AXMgSLintCBuo7+VQZZnu880tDzUvdvX6y3EXI6DnEWgMaHbsHecfqxqFwDA3ulKCEHClzZhLgLLcBQRF3t+zU30N3ix6kN8CTJ6O+5xY0sDHXluTgJAk3rs5v0LQUKRUlpFxC+164AHOEkp7e1BuDzc9XZRrH0cZG/dCFdlJgf0ZE7zWADYj3XtAmoTJMRftjTA0vyyz/b8nPM2Ij7t6/UW4qxGe1qnxz2uaxcAFaxqFwDA3h2VAf3dEiQMNtHfDT3t2O65dXa9x9dagqOYeGhOp8c9vss5X9YuAio4rl0AAAexrl1ATd0HCbY00IC9zkvIOV9HxNt9vd5CvC7Xgqn0dtzjbZhwTL+OaxcAwEG87HnoYvdBQtjSQBteppT2ucJ9HhE3e3y9JdhM8SadHve4NmCRjpmRQOuuaxcAFc3hBLAqug4SOt2jTLs25SH1ycpD33ofr7UgLyfa69bbsMFPOed9nzACS9JT9xH9uY39nyIFS7KuXUAt/6hdQC2lDaW3PcqHcBVDEn0ZEZ/LP8d4ERHPYmj5vPsS6jzNUQwdNvsKE3YppY8R8Wofr7cQm5TSxaFWzzs97nFduwCoLaX0TFcOjdJxRu9OUkrHZWtwV7oNEqK/Pcr78ikidhGxyznvnvA6f/t3ywC6FzFMuL77p+/Rw5yklDY5582eXu8s+vo+PI/hz7w50Ov31o3wtsdfrPAVL+Irv/dg4X7WcQYRMWxv6O0er8+tDWWoWk+rrE/1MSJ+joj/l3Ne5Zw3TwwRvirn/DnnvCuvf5pzfhYR/4yId9Hffv2neLPHLQ7X0d+QvIMcB9nhVqqbPQZaAMzHx4j4qRwZDXR6zG+vHQmb2gUswE0MbfLbmiuK5bi4sxge7l7E0Ca9jn5WyB/rPPZ0Ucs5n5fZASf7eL0FuDsOcr2vF+z0uMd17QL4iw8x7GP+fIgg+Evlen3XZbaOfq4f1Hcbw/3L3c+7Y2dpzaTX8/vuXdsj/rzG6yLuNEhIOefaNUyq7FH+T+06ZuwmIjZzT5nLg+0m+lrhfahfc857abMqvzh+38drLchP+/oFnVLaRl8nNXzIOa9rFzFW6RZ5U7uOA7mKYQ9z1Yep0gl4Hv0GCnu7njxVSqnlG78PEXFmz36/Gr+e30bEqvb1/FvKM9ZZ9DcL6s4/5/q9OZQetzZ0t39lpJsY9rodzz1EiIjIOW9zzscxbLmw7eHrNvtq0S8Xxnf7eK0F2ezjRTo87vE2+uu+mKubmMlNZ9m29iIi3tauhWZ9zDkb/EerZh0iRETknC9yzquI+CmGELs3q9oFTK2rIKGsYlvB/qvbGG7sXiwhQPjSvUDh1xj+LPzpKPb7QLeJvkKbfR0H2Vt4uXEjPxuze6gqczP+Fa7X7Ndt2E5F2zZzDhHu6zg4XtUuYGpdBQlhNsKXPsYQICz+xr+08B/H8GfiT6t9vVD5Geltpfm8zDd4lA6Pe/y0r+00PNnNXFrpv1SmvK9q10FTDnZsL8zA7RJ/t3YYHO9l0PmSdBMk6Eb4i9uI+Fc5GeG6djH7Uk59OI2+Llo/stf9yOUBoKew5qldHYv7xf9EvQVNc3Zdu4DvKStrP9eug2YsYqUWHmmxP9/3guMe7sufP2XxaYm6CRJCy9udTzF0ITR77m/5s72I4c/au0P8HZxFH78Q7rx5zKyJDo97fLeUtstOzP57UbbTuU6zD7P/eYdelXuD09p1TKSrroQugoQyLbqn9uJveZdzXrXUhfAtOefrMvCltwGBX9r7zVX5+dns+3Vn7kGdBR0e93gT/f1MzN1S2rw3tQsA4LDKVrtfa9cxAUFCg3q6of+a2xhOZOju76H8mXttn72NA7XWl716PU3kfVUCybHOo6/zlB23xqOUm8uehrgCdKncO7behWZrQ0tKS/KrymXUdHdczLZ2IbWUP/tP0Vc7fsTwcHd9wNdfH/C152hUKNPhcY+fWt4qxSR2tQs4tLkOvgSY2Lp2AQe2ql3AlJoPEqLvboTZnzk7lXITt4o+woRPEfHPQ4dH5eeqp60jJyOPg+xpwKIj19iH69oFAHB4ZYHrQ+062I8egoR17QIquYphqGL3IcKd8nexijbDhNsYHur/t8zBmOr7vom+2pK/exxkh/NYznuYuQJP1HorL8BDbGoXcEA93QO2HSSU1cOe9infuY2Ipo523JcGw4RPMcy/eJZzPvRWhr8p++LXU75nZT86DnI7UR1zcFXOiAa+T6APUJR71Z6OEm9W00FC9HPUyH132xmuaxcyVw2ECTcR8Tb+7D7Y1iymbBvp6RfCmzIH4S9SSufR13GPPW8bY7+OaxdwYIIEgL/a1i7gUL7XudqaZoOE8k3sbciimQgjlb+jde06HuhjRPwr53ycc97MLCxax3KDmcfY3c1LSCkdlxDhl7olTeqD4XHs0ap2AQe2q10AwJw0PqS5myMgmw0SYnkPiftwJkQYr1zE5n6m7f3ug9O5XnjLFodN7TomdBQR71NKOSL+iL5ChNvQjcCelJOVWu7kuZlZ6AswF+bHLJwgoR3vare4L1E503aO02M/xHy7D76qk/OBGQLLz7WLoBmth1KzDH8BZmBXuwCepskgoaxwnFQuY0pXOefWb8YO6SyGUy5qu4mhQ+L/5ZzXc+0++AE/h237JLBcjNnv0SxbENe16ziwbe0COtFNKzE0ZFe7AJ6mySAh2t9ved9t9DlUcm/K6upp1Nvj/yEifirdB+dLXu0tW2ve1q6DgxEULccSHqy20fbJSje2G05mCT/vwF9d1y6Ap2k1SOjpwXoRbe9zV/4Op3xI+rL7YDfhex/aeQx/Ptry1kPRohzXLuB7Ukqn0f5A5E3tAjpy2tOkdGiB55flazVIaP3m5M6nsi+dPSgt24c8xvA2hu6Df7bQffAt5c+0rl0He3UTQ0DEcjxPKa1qF/E15fjUbe06Duw2zEeY0lG0/zMFMCvNBQlllaMX69oFNGgd+9/icBURP0fEcek+aH5Vt3RYHDKUYVoGLC7Tdm6rtCXc2EXbWxoiIpoMimfuVUppdj/zAK1qLkiIfuYjvNUStH/lxm8fWxzudx+8yDlvO7ypXEe9uRPsz8eFDv5kOFZxVzoAqkopHaeUthHxW7QfItyGDp5aXkfEdUrpPKW0msPPPkCr/lG7gANY1S5gAm5SDijnvC2rZq8f8a9fxfC9uegwOPiLnPPnlNImIv5duxYe7TYMWFy6k4j4PaX0IYZW+89TzGS5t63iRQy/l3vZchihg6e2o4j4pXxFSqluNctxFUMnzbZ2IcAyNBUklHa2Ho591DJ5YDnndUrpc5QbkR+4jWFv5rkukb/KOZ+X7UYva9fCoxjm2o7X5cuD1WE5IpWlOomI9+V39tp9JoemY2j5WtvasKpdwAR0I0wk53wWET/Ft/f6f4qIn3POz3LOZx64vsmK9jJdGeYKD3IbZhexfK/CfSbTOK5dAE/TVEdC9HGOsG6ECZUW4F3pdrn/83UtOBgn53yZUnoX47o7mA8BEDyMQJlWvE4pbRs7mpr5WdUu4ECuaxcwldaChFXtAg5MN0IlJbzZ1a5jwTYRcRrD8Dfm750bSHiQD7Y00Jh1uO/hsFa1CziEngLl1rY2tN6R0P0AP5Zpj6dhcHi3MQQ/wDhX4fpGe1q/p6aiMh+hh7l2TWsmSEgpHUf7R0rpRmCxyhGC35o3wXyYOA/j3YbBdLTJQx6H1Gr4+ql2AVNqJkiI9gd2XOWcL2sXAU90FsONN/Nk4jw8zNrvZoDxyuLvY45YX4KuQuWWgoRV7QIObFu7AHiqsm9MZ818rWsXAAvyc+m0AmC8lu8DuwqWWwoSjmsXcGBuVmhCznkTETe16+Bv3vY0IAieyHBFgAdKKZ3GcMRoq65rFzAlQcIyXLnBpzHr2gXwFzfR9goB7NOHnPO6dhEAS1K2NGzrVnFw17ULmFJLQULL02V1I9CUcrTgh9p18F+GxcE4QgSAB0opPYvheabpwfi9HZ3dUpDQ8g/mrnYBcAAGL87Dx95+8cEjCREAHqiECLto/ySQq9oFTK2JIKGcRdosN/m0qKyAb2rX0bnbsM0ExvhViABUcly7gMcqz2i7aD9EiOhw4beJICEintUu4IC6Oo+UvuScz6PDBHdGNrY0wHfdxnA6gxkiQC3PU0qr2kU8VBmsuIs+QoSIzk5siBAkLEF3P5R0Z127gE5deTiC77qKiJXTGYAZ2JYtArOXUjpOKe0i4j/R9tbzL+1qFzC1VoKElrc2CBJoWs75MiLe1a6jQ+vaBcCMfYghRPA7GJiD5xGxm3OYkFI6TSltI+KPiHhZuZyp3fR4wt4/ahfAD13XLgAmsInhwban5Lqmdx6Q4Js+mYcAzNBJRFymlDYRcVF7a2KZf/AiIlbl63nNeirr8oQ9QcLMGbRID3LOn1NKZxHxvnYtHbgNQy7he9a1CwD4hucx3Cu9TyndRp3O5d66DcbY1S6ghlaChOPaBQBPk3PeppTW4RfUoa1rr2IAAE92FO6ZZiHn3GVHQiszEo5rF3AgTmygN2e1C2jcp15/2cEDXMx5HzIAs/KxdgG1tBIkAA0wePGgbkPLNoxxtw95VbsQAGav2wUaQQIwN5sYHnrZr/MeJwrDIz2PiN9SSruU0nHlWgCYp9sQJADMQ9m/b4vDft3knDe1i4AFehkRf5Qp6QBwX/XTM2oSJMzbrnYBUEPOeRtmhOzTunYBsHBvUkqX5bgzAIiI2NYuoCZBAjBXuhL244NjZGEvTiLi93JULQB9u+n9/kqQMG9WPuiWwYt7cRsCGdi3f6eUnOwA0Lfz2gXUJkiYNzcp9G4TBi8+xabnvXtwQK9iONlB4A/Qn9vofFtDhCABmDGDF5/kU865+7QcDuh5ROxSSuvahQAwqa2FGkECMHMGLz6aAAYO7ygi3gsTALpioSbaCRKuaxdwIFomYeCh+GHelRkTwDSECQB9+JBzvq5dxBwIEubtqHYBMAflofhD7ToW4iaG2RLAtIQJAO3b1C5gLloJEpqVUjquXQPMxFkYvDjGmX17UI0wAaBdb3Uj/EmQMH/HtQuAOSgPx5vadczcx5zzRe0ioHPnTnMAaM5tmI3wF60ECS3vBV7VLgDmopxCcFW7jpm6DbMkYA6OIuIipeQIZ4B2OFL7C60ECS1/U61qwF95WP66c+12MBvPI0J3EEAbrhyp/XeChPkTJMA9OeddGLz4pauc86Z2EcBfvEwpCT4Bls+1/CuaCBIaP+bsuYGL8DebMHjxPr/gYJ42focDLNq7sojFF5oIEoqWHypWtQuAOSkt/FrMBh/8goPZOoqIbe0iAHgUR2p/R0tBQstdCae1C4C5Ka38N7XrqMyARZi/l46EBFiktQGL39ZSkHBdu4ADWtUuAGaq94foM7/gYBE2tQsA4EHe6vj8PkHCMhyllHQlwBdyzhcR8al2HZV8yjlvaxcBjPI8pbSpXQQAo3wyxPrHWgoSdrULODBBAnzdunYBlfTejQFL4zMLMH+34blrlJaChOvaBRzY65TSs9pFwNyUwYvvatcxsbeNn1YDLToyKwFg9la2jY7TTJBQHiZaPrkhot+VV/iRTbT/+b/PiRWwTJvaBcBIV7ULgAp+tlAzXjNBQtH6N15bJHxFSY57ebj+ICnnET5ExL8i4qecc5ryKyJ+uvf1NvqdaxIxzEpY1S4CRmj9nhq+9LPZUw/zj9oF7NkuIl7WLuKAnqeUTsuAOSZUtpW8uPd/uvQwNzvbiHhTu4gJ9BKYsB83EXFac4Xli6nXu4j/XlPPytfR9FVVtY725zqxfNvaBcCEPggRHk5HwvLoSphQSuk4pbSNiP+LiN/uff1fSmlnv+t8lO1Nrbdi3mi54wFuY9jrObufmZzz5zIR+zgiPtatZnKnZh4xcx8ce0dHPuSc17WLWKLWgoRd7QIm8FJb5DRKSHAZEa+/8T95GRHvU0qfU0rnKaXjiUrj21rv1tGNwEOclYBttkqgcBoRP9euZUJHYSI48/UxLFrRj1+FCI/XVJBQWs1bX5GM8DBxcCVEeB/jWm6PIuKXiPgjpXSZUlpbbapmV7uAA9vVLoDFuF1Sm2aptacwYVW7APjCVQx7xE9t3aQTP+ecPVM9QWszEiKGG+2T2kUc2ElKab2km8QlKZ0Fj72wnMQQQJynlC4i4nyObcWtyjnvUkq1yzgU2xp4iMX9rOSctymlFzEEs63TkXA4tzHs77+IiM+um8AXbmOYHbSrXcjSNdWRUOxqFzCRc6veB7ONpw//OophS8TvuhQm1+pEeDfDPMR17QIeI+d8Fu1+hu87KqEJ+/UpIo5zzmc5550QAfjCVUS8ECLsR3NBQkcnGhyF86j3LqV0Fvs/+eOuS+E6pbR183hwrd44tvrn4jCuaxfwBOsYVoxat6pdQGOucs4rbfnAN7zLOb+Y++ygJWkuSCh6mQD9i8GL+1Me8DcHfIv7XQrXKaUzXQoH0epNpCCBLpSbvB72rQqV98t2EeBrbiLip9Lxxh61GiT00pUQEbH1MPp05e9wG9OdZ/48Iv4dwzGSW4HQXl3XLuBAWg1I4GvOo/2uhOPaBTTko1VG4Cs+hK0MB9NqkLCrXcCEnkcfKzeHdh71hnS+jojfdCnszXXtAoCnKe3p29p1HNi+t9H1TMcW8KWPOee17U6H02SQUFLpHo6BvPO6HFfII5S5CK9r1xF/71LQpgn0rPnuQsHx3uxqFwDMym0M83Y4oCaDhGJbu4CJvTfE7+HKw/q/a9fxFa8j4j+lS2FTjqQE6EYnrah+bwPs34VOhMMTJLRl54FzvBK8bGvX8QPPI+JNRPyRUrrQpQB0poejIAHYr+Y72uag2SChpFC9nN5w5ygiLrRK/lgJEXYx3XDFfXgVuhQAWnJcuwCABulGmECzQULRYxp1EkNngjDhGxYaItz3ZZfCunI9ADzOce0CABqkg3cCTQcJOedttH981NcIE76hgVmzMvgAACAASURBVBDhS69imI/xOaV0rksBaIwZAgA81Npz0OE1HSQU29oFVCJM+EJZud9FOyHCfUcR8UsMXQo7gzeBpSvBaIvXawAO6yj6fQacTA9BwnntAio6iYhLD5X/PeLxffRxU/oyIn635QFYuFXtAgBYrFfl/p8DaT5IyDlfR39DF+97HkNnwqp2ITWklJ6llLYxzyMeD81WB2DJ3AAC8BT/tqB6OM0HCUXPXQkRwyr8bymlTe1CpnRvHsLryqXUchQRm9pFADxUOer2pHYdACyeE+0O5B+1C5hCznmXUvoUQ8t3z96UzoTTcjxms0orU49dCF+SwkKfFnvTVG74el8AAPiRq/j2MYfHMXQlM/w9XITtcnvXS0dChIEbd15GxHVZ7WlOSuk4pbQLIcIdK3rQpyWHiNtwA8zDrGoXABO5iYifI+L/5Zxf5JxX3/g6zjmniPhnRLwr/17PXvbWmT2FboKEchRk7x+iO0cR8Z+U0kVLe+jLBeKP0Hly36faBQBVLDJIKDNtXtWuY0JNdwdOaJE/7/BAVxHxIue8HdtZnHO+zDmf5ZyPYwggen4WetPrzLhD6SZIKDa1C5iZVzGc6rCpXchTpJTWKaXriHhTu5YZuqxdAFDF0ZJObimDcS+iv5k2rtH78aqlhRH4iquIWD1la3JZVH0RQ4dCr5paRK2tqyBBV8JXHcWQ0F0v6aYzIiKltCrbGN6HNtivuQ37jKFnizi55d5g3J46Edi/i9oFwAGd7WO+Wc75c875LIbuhB4dhWvF3nQVJBSOk/q65xHxfgmBwr0OhN/CNobv2ZTjT4E+HcVw/O8s277LTJttRPwe5rnwdCcppZ3p7DToJue82+cLlsXVXsOEk5SShbY96C5IyDlfhH3j33M/UNjMZTUrpfQipXSeUvocOhDGuMo5u0gCzyPi95TSNqV0Wmt/aNm6sCpfZ2Ubwx/R31aGL9nasF93A6XPy8/aLEM0eKDrQ7xoCRM+HuK1F+CXuS+cLkHKOdeuYXLlRuq32nUsyMcY2oAupjw2stwAnJYvq1UP88+cc5c3qA1/vn/a94oEgzInxowVJlemqk8qpdTfjR/79jEizuf4O6nR6/mnnPPqEC9cOnguo88FutsY5k50eb+8D911JERElAtfrwncY7yKoQvg/0rb4OYQq1r3V6pK58HvMfwyECI8zFsXRYDZu61dADzSq4j4zYru8pUFwnXtOio5ioit7VCP94/aBVR0FsO5w0eV61ial+XrTUopYpgiex1Dmvk5xrVpPos/j2palf8uLNiPq5zzpnYRAPyQwJele59SumuRZ6FyzruU0ruI+KV2LRWcRMQ2hu5nHqjbICHnfF0GbbTW/jS1k/Jl2vY8rGsXAMAo17ULgD04TylNuvWV/cs5n5Vu4x4X9l6llM7MFnu4Lrc23Ckrt46DpBW2NAAsx3XtAmAPjsJqbivW0e+Wq3/XGka8ZF0HCcW6dgGwB7Y0ACyL4JdWHNcugKcri1Gb2nVUdGFewsN0HySUwYvvatcBT3AbVgMAlkaQAMxKae/vdSD9UUTsahexJN0HCcUmbHFguc5yzte1iwBgtFvXbWCm1tHvFoeTMkOPEQQJ0f3RJyzbB9OSARZHNwIwS+W5qOdO118cbTqOIKGwxYEFuorhGFMAlmVXuwCAb/FcFOcppRc//p/1TZDwV5sYHs5g7m4jYu24JYBF2tUuAOB7cs5n0e9z0VEYvvhDgoR77m1x6HVfEMtx5qhHgEW6Lat9AHO3jn6fi55HxLZ2EXMmSPhCeTjTLs6cmYsAsFy72gUAjOFIyHiVUtrULmKuBAlfUR7SPtSuA77iKue8rl0EAI92UbsAgLE6PxIyIuJNSqnn4ZPfJEj4hvKw1uu+IObpNiJWtYsA4EkECcDSrKPfLQ4REduU0nHtIuZGkPB9q+j7Q8N83EbEynBFgEX76DoOLI0jIQ1f/BpBwneUD80qhAnUZ7giwPJtaxcA8BhlSOzb2nVUdBIR57WLmBNBwg+Uh7d17Tro2q+GKwIs3k3O2bYGYLFyzpvoe+v365SSofyFIGGE8ov/59p10KUPZcgNAMu2rV0AwB6cRt/d2v9OKa1qFzEHgoSRyopwz+08TO+jExoAmnAbWmKBBuScr0O39oXhi4KEByntPI6FZApX4SIN0IpzQxaBVpRu7Z6fiY7CCTyChIcqK8Q9f3A4vKtwQgNAK3QjAC06i77nJZyklLa1i6hJkPAIwgQOSIgA0JaNazrQmnJdW0ff8xJep5TWtYuoRZDwSMIEDkCIANCWGwNzgVaV0+02teuo7H1K6UXtImoQJDyBMIE9EiIAtGdduwCAQyph6cfadVR2kVJ6VruIqQkSnqiECY6G5CmECADteZdz3tUuAmAC64i4qV1ERc+jw+GLgoQ9KEdDChN4DCECQHtuQrsv0IlyH3tau47KXqaUNrWLmJIgYU9KmPBT9D1whIf5GEIEgBatXduBnpR5Cb/WrqOyNymlbgIVQcIelRbGVfTd2sM4H3LOp240AZrz1pYGoEdlXsKn2nVUtu1l+KIgYc9KGvcifIj4tl/LbA0A2vIx57ypXQRARafRd4f2UQxhQvPDFwUJB5Bz/pxzXkXEu9q1MCu3EfEvR4EBNOkqnNIAdM68hIiIOImI5u/3BQkHlHM+i4h/Rd+pHIO7oYrdTXQF6MBtmHkDEBH/3e79tnYdlb1OKa1rF3FIgoQDKw+OL2J4kKRPd0MVL2sXAsDeCREAvlC2efW+1ft9y/MSBAkTyDlf55xfhK0OvbmNYR6CoYoAbboLEQTFAH/X+7yEiIiLVuclCBImVLY6/BROdejB3VaG5vdHAXTqJoQIAN9kXkJERDyPiG3tIg5BkDCxsmdId0Lb3uacX7i5BGjWVUS4zgP8gHkJERHxKqW0qV3EvgkSKiinOuhOaM9VRPzk6C+Apn0IMxEARjMvISIi3qSUVrWL2CdBQkX3uhN6T+lacNeFsKtdCAAHcRsRP+ec10IEgAczL6GxeQmChMpKd8ImIv43JHVL9Cki/lcXAkDT7ubebGsXArBE5iVERMRRRDRzFLwgYSbKyQ6rsN1hKW4i4l8551XO+bp2MQAcjLk3AHtgXkJERLxMKTUxjF2QMDM5513O+Tgifg7tP3N0d6Tjcc65mUQRgL/RcQawZ+YlRETELymlxXdnCBJmqrRPHseQ2gkU6ruN4Xtx7EhHgKbdDc7VcQZwGOYlRGxTSse1i3gKQcKM3ZufcBwChVruBwgbA7YAmnUTwzBFg3MBDsi8hIhoYF6CIGEBvhIomKFweDcR8WsIEABa9ymGmTfHhikCTKMEtr/WrqOyk5TSWe0iHkuQsCB3gcK9GQpXlUtq0acYVqSOc87nAgRmxM8i7M9tRLyLYQbCqrOZNxYjaFmLvyuvaxdwKGW78MfadVS2rl3AYwkSFirnvM05v4jhlIcPtetZuNsY/g7/WW4ot5Xr4WmuaxdwALcmxh/Ude0CmMTdtf5fOednOeezTmcguJawb9e1C7hnV7uAA2j9M7uOvhdHT2oX8Fgp51y7BvYgpfQshg/iOhb8AzmxjxFxIThoT0ppFxEva9exRx9yzuvaRbSqXD+vY9ivSFuuYniw2HXWdfBNKaVVRPxWuw6acRvDNtDZdAKklK4j4nntOvZkdn+/h1B+D++i02eYnHOqXcNjCBIalFJ6EUOgcBrtXEj35WMMg00uWr8o96x8BnbRxoNhFzcRtaWU1hHxvnYdPNmnGFbvdjGEBz43X5FSuoiIV7XroAk/z21BptwD/F67jj35tZfTwkqYsImIXyqXMrWPOedFDp4UJDROqBC3MdxQCg8600iYcBsRK9saplEGHv27dh2MchXDXuhdDMHBtc/JeOWG/SLa6txierMLEe6UcPg8ln0P8C7nvNhBfI9V7t820U/Y+a+ldswJEjpSzio9jYhV+VryxfV77lpZLxzh1bfyM7+J4ed+ST/vtzHcABn4ObHS9n0W/dzAzM1t/HU/8K788/ruq9O5BgdRHrbOotN2Yh7tYwy/n3a1C/meBd8DLOLv99DuPbecRpuh521EnM01jBtDkNCxkvityteLWGbHwt1N5y6GNtZd1WoAAAAaJ0jgv0qr41248CIinsW8EsBP8eeq1C6sTAEAAExOkMAPldai+193gcOdp4YNn+795+v48xihXUSELgMAAID5ECQAAAAAo/1P7QIAAACA5RAkAAAAAKMJEgAAAIDRBAkAAADAaIIEAAAAYDRBAgAAADCaIAEAAAAYTZAAAAAAjCZIAAAAAEYTJAAAAACjCRIAAACA0QQJAAAAwGiCBAAAAGA0QQIAAAAwmiABAAAAGE2QAAAAAIwmSAAAAABGEyQAAAAAowkSAAAAgNEECQAAAMBoggQAAABgNEECAAAAMJogAQAAABhNkAAAAACMJkgAAAAARhMkAAAAAKMJEgAAAIDRBAkAAADAaIIEAAAAYDRBAgAAADCaIAEAAAAYTZAAAAAAjCZIAAAAAEYTJAAAAACjCRIAAACA0QQJAAAAwGiCBAAAAGA0QQIAAAAwmiABAAAAGE2QAAAAAIwmSAAAAABGEyQAAAAAowkSAAAAgNEECQAAAMBoggQAAABgNEECAAAAMJogAQAAABhNkAAAAACMJkgAAAAARhMkAAAAAKMJEgAAAIDRBAkAAADAaIIEAAAAYDRBAgAAADCaIAEAAAAYTZAAAAAAjCZIAAAAAEYTJAAAAACjCRIAAACA0QQJAAAAwGiCBAAAAGA0QQIAAAAwmiABAAAAGE2QAAAAAIwmSAAAAABGEyQAAAAAowkSAAAAgNEECQAAAMBoggQAAABgNEECAAAAMJogAQAAABhNkAAAAACMJkgAAAAARhMkAAAAAKMJEgAAAIDRBAkAAADAaIIEAAAAYDRBAgAAADCaIAEAAAAYTZAAAAAAjCZIAAAAAEYTJAAAAACjCRIAAACA0QQJAAAAwGiCBAAAAGA0QQIAAAAwmiABAAAAGE2QAAAAAIwmSAAAAABGEyQAAAAAowkSAAAAgNEECQAAAMBoggQAAABgNEECAAAAMJogAQAAABhNkAAAAACMJkgAAAAARhMkAAAAAKMJEgAAAIDRBAkAAADAaIIEAAAAYDRBAgAAADCaIAEAAAAYTZAAAAAAjCZIAAAAAEYTJAAAAACjCRIAAACA0QQJAAAAwGiCBAAAAGA0QQIAAAAwmiABAAAAGE2QAAAAAIwmSAAAAABGEyQAAAAAowkSAAAAgNEECQAAAMBoggQAAABgNEECAAAAMJogAQAAABhNkAAAAACMJkgAAAAARhMkAAAAAKMJEgAAAIDRBAkAAADAaIIEAAAAYDRBAgAAADCaIAEAAAAYTZAAAAAAjCZIAAAAAEYTJAAAAACjCRIAAACA0QQJAAAAwGj/qF0AQA9SSscRcf/rWUS8KP/vZxFx8siXvomI6/Kfr8vX54i4jIjPOefLR74uAAB8Vco5164BoBkppbuAYBV/hgYv61UUEX+GDbsYAobLnPN1xXoAAFgwQQLAE5ROg9W9r+fVinmY2xhChV1E7HLOu6rVAACwGIIEgAcoHQeriDiNZQUHY3yMIVi40LEAAMC3dBkklAeBs4hYR1sPAbV9uvefr+PPfdu7iAgrnixV6Tq4Cw5e1axlQjcRcRERW3MWAAC4r7sgoYQIu3j8YDOe7lP8GTTsIuLa6idzU64VpzEEjrVnHNQmVAAA4L96DBIuQ4gwR/f3a1/GsGf7c9WK6FJKaRVDePC6biWzdRUR5zFsf/AZBQDoUFdBQkppExFvatfBaFdRBsGFYIEDKt0H6xi2PNnuNM5tDF0K57oUAAD60luQcB0eEpbsUwwPLgbBsRdl9sEmhi0MRzVrWbhPEbExBwUAoA+9BQn9/GHbdxUR2xAq8Aj3AgTbF/brJoZAYVu7EAAADkeQQAvs2WYUAcJkBAoAAA0TJNCaD2HPNl8QIFQjUAAAaJAggVZdxRAobGsXQj1liOJ5CBBqM0MBAKAhggRadxPDSrRtD50pp7SchSGKc/IxIs7MNQEAWDZBAr24jWFl+lyg0LaU0iqGQZxOaJmvtznnTe0iAAB4HEECvbFnu1FlG8M2Il5VLoVxbiJibbsDAMDyCBLolYeYhqSUTmMIEWxjWJ4PMWx30CkEALAQggR69ymGQOG6diE8nC6EZtzG8Dm8qF0IAAA/9j+1C4DKXkbEH2UwHwtSuhCuQ4jQgqOI+E9K6byEQwAAzJiOBPjTVQyrope1C+H7UkrnEfFL7To4CJ9DAICZ05EAfzqJiN91J8xXSuk4pXQZQoSW3X0O17ULAQDg63QkwNdZFZ0ZAxW7ZBAjAMAM6UiArzuJiJ1V0XkoXSL/CSFCb17H8Dk8rlwHAAD36EiAH7MqWkkZvHcewwMl/bqNiJUOIQCAeRAkwDhXEXHqmMjplBBhF0N3CERE/Jxz3tYuAgCgd7Y2wDgnEXGZUnpRu5AelL/nyxAi8FfvDUMFAKhPRwI8nFXRAyohwi7MQ+DbPuSc17WLAADolY4EeDirogciRGCk1ymlbe0iAAB6pSMBHs+q6B4JEXgEn0EAgAoECfA0HmT2QIjAE1zFcKKDU1UAACZiawM8jRbrJxIi8EQnEXFRuwgAgJ4IEuDphAmPJERgT176DAIATEeQAPshTHggIQJ75jMIADARMxJgv8xMGCGldBwRlyFEYP98BgEADkxHAuzXa0dDfl9K6VkMe9qFCBzC65TSWe0iAABapiMBDuPnnPO2dhFzlFLaRcTL2nXQPJ9BAIADESTA4fyUc97VLmJOyh7217XroAu3MRwLeVm7EACA1ggS4HA8yNyTUlpHxPvaddCV24g4zjl/rl0IAEBLBAlwWFcxhAldP8iUExp+r10HXbrKOb+oXQQAQEsMW4TDOomI89pF1FSGK+5q10G3ThwLCQCwX4IEOLzep8g7oYHaXpetNQAA7IGtDTCdf/Y2L6Echfmmdh0Qw7yEFznn69qFAAAsnSABptPVvARzEZgh8xIAAPbA1gaYzklEbGoXMYUyF+Gidh3whZPSJQMAwBPoSIDp/ZRz3tUu4pBSSucR8UvtOuAbmv8MAgAckiABpncTw17tJrc4pJRWEfFb7TrgO5r+DAIAHJqtDTC95xHR5CkOZUvDtnYd8APNfgYBAKagIwHq+d/WJsjb0sDCdHeSCgDAPggSoJ5POedV7SL2xSkNLJBTHAAAHsHWBqjnZUrptHYRe3ReuwB4oJOUki0OAAAPpCMB6rrJOR/XLuKpUkrriHhfuw54hNuIODZ4EQBgPEEC1Pdzznlbu4jHKgMWL2MYYMfjfIqI6y++vudZRLy4988XEXF0qOI68C7nrDMBAGAkQQLUt+gV0ZTSJiLe1K5jYT5GxC4iLnPOu328YErpOCJW974EOw/T3PBTAIBDESTAPLzNOW9qF/FQpRvhOqyGj/ExIrY554sp3qwMv1xHxGkIFcZoavgpAMAhCRLachPDwLvLiLje5+paWe08/sr/a1X+eb/N2kPlwy2yKyGltI2I17XrmLG7z+S25ve2DPU8i4iXtWpYiJ/21SECANAyQUI7PuSc17WLiPjvKvWLGEKGu/3bVkR/7Nec82JOPijh0h+Vy5irm4jYzG32RfmebUL48y26EgAARhAktGH2g8Lu7d8+jYhXNWuZsUWd4KAb4atmGSB8qXwez8Nn8Wt0JQAA/IAgYfkW9fAZ8d+OhbtW65PK5czNIk5w0I3wN7cRcb60ORcppVUMgYLP4Z90JQAA/MD/1C6AJ1tMK/ydnPPnnPM25/wiIn6K4eg7BrPuLLlnU7uAGfkYw3yLTe1CHirnvCufw19jCEOIeFkCFgAAvkFHwvI10YZbbtw3YRhcxMy/p6Wj5P9q1zEDtxGxnuoUhkMrXSbb8BmM0JUAAPBdOhKYhbIyuoqIf4WV0XXtAn5gKV0Th/Qphi6EJkKEiIic83X5DP5au5YZeFmCFQAAvkKQwKyUB7PjGNrFe/W6rPrPVe9Bwtuc82ppR3WOVU4O+WcMgyN7tqldAADAXAkSmJ0yQ+E0In6OfrsTTmsX8DUppXVEHNWuo5LbGIZhbmoXcmg558sYjm29ql1LRXMP9AAAqhEkMFvl9IJV9LkyOtdV/7nWdWi3EbFawoka+1ICvRcR8aF2LRX1+vMOAPBdggRmreOV0ZO57dFOKb2IPo8JvAsRLmsXUkPOeR39hgnr2gUAAMyRIIHZK3vRV9FfmDC37Q09rs52HSLc6ThMeJ5SmtvnEACgOkECi9BpmLCuXcCdsle8twcqIcI9HYcJvf3cAwD8kCCBxShhwjr6GcA4p+0Np9HXkEUhwld0GiYYuggA8AVBAotSHux6WiGcy591LnVM5VSI8HUlTOjteNbefv4BAL5LkMDi5Jx3EfG2dh0Tqf4AU1ZjX9WuY0I/l58xvm0dfW0zqv45BACYE0ECi5Rz3kQfDzIvZ9BW3dND1Ieejnh8rLLN6DT62Wb0agafQwCA2RAksGTr2gVMZFX5/XsJEm6iz5MpHiXnfB39fAYj+vkcAAD8kCCBxSp72HvY4rCq9cadbWs4LSvtjJRzvoiId7XrmIggAQCgECSwdOfRfnv1qtP3ntJbwxUfbRNDN0fregnUAAB+SJDAopUV5Nbb0U8q7s/uYRX2pszc4BHuHcvavJRSD58HAIAfEiSweGU4XusroqvO3ndK69oFLF055aKHIyFXtQsAAJgDQQKt2NQu4MBeTP2GKaXjiHg+9ftO7JOjHvem9c6gCEECAEBECBJox0W0PSth1cl7Tm1du4BWlFMcWh9+WnObEQDAbAgSaELZp72tXccBTd6REO0HCR/Kwy/7Y/gpAEAHBAm05Lx2AQd0VLYaTGk18ftNbVO7gNaUQK/lz2FEnVAPAGBWBAk0o6wuX9Wu44COp3qj0r7d8nyET7oRDqb1IGFVuwAAgNoECbRmW7uAA1pN+F6tr7puahfQqtKV8KF2HQfU+mcDAOCHBAm05qJ2AQd0POF7rSZ8r6ndOKnh4FruSqixzQgAYFYECTSltKvf1K7jQI4nfK+WV11bfsidhZzzZbS9zajlzwcAwA8JEmjRrnYBB/Jywvc6nvC9ptZy18qcbGsXcECCBACga4IEWrSrXUADTmoXcCAfDVmcTMuBjSABAOiaIIEWXdYu4FBSSqsJ3qPlh6SWH25npfFTVJ7VLgAAoCZBAs0p+7N5vJYfkna1C+jMtnYBBzLlNiMAgNkRJNCqT7ULOJBVI+9Rw5VtDZPb1S7gUFJKLQduAADfJUigVde1C2B2drUL6E3pDrqtXceBtLwFCADguwQJtOq6dgEHMsUqaKsPSLvaBXRqV7sAAAD2S5BAq65rF3AgUzzkt9qybXZGHa3+va9qFwAAUIsggVZd1y5gwVoMEm7NR6hmV7sAAAD2S5BAqz7XLmDBTmoXcACtroovgb97AIDGCBJoUsNHQLY6v+DQWv15mL2cc6uh3qp2AQAAtQgSYFmOahewUK0+zC5Fq8exAgB0SZAA9GBXuwAAAGiFIIGW3dQuYGlSSqvaNdCkXe0CAADYH0ECLbuuXQCzYWsDAADsiSABaF7DwzcBAGByggQAAABgNEECADzcce0CAABqESQAwMNd1y4AAKAWQQIAAAAwmiABAAAAGE2QADQvpbSqXQMAALRCkEDLjmsXsDQ5513tGmjSs9oFAACwP4IEWva8dgHMhgfZul7ULgAAgP0RJAA98CALAAB7IkiAZbmtXcBC6Uio62XtAg5gV7sAAIBaBAk0KaXU6gr05QTvcTXBe0yt1Z+H2UspHdeuAQCA/RIk0Cor0I/3uXYBByBIqOe4dgEAAOyXIIFWHdcuYMFaDBKOrIxXs6pdwIHsahcAAFCLIIFWHdcu4ECm2NowxXvUoCuhDn/vAACNESTQquPaBRxIi90CU1nVLqBTq9oFHEirgRsAwA8JEmjVce0CFmxXu4ADOa1dQG/K0NOj2nUcQs5ZqAcAdEuQQKtaPG4uYpqH/FYfkJ6bkzC5VsObT7ULAACoSZBAcxo++nESOeeWW7ZbfbCdq1b/vlsN2wAARhEk0KJmg4Sc826it7qa6H2mtq5dQC9K98dJ5TIOpeWwDQDghwQJtGhVu4AGXNcu4EBObG+YTKvdCBGCBACgc4IEWrSqXcCBTLkvu+UHpXXtAjpxVruAA2r58wEA8EOCBJpSVpufVy7jUKbcl72b8L2mtq5dQOtSSqto93N4m3O+rl0EAEBNggRao516ee81tecppXXtIhqnGwEAoGGCBFqzrl3AAU32AJNz/hwRN1O9XwXr2gW0qnQFvapcxiHtahcAAFCbIIFmND4lPmL6ldDdxO83pZel/Z7929Qu4MB0JAAA3RMk0JKW26lr7Mtu/YFpU7uA1pQw73XlMg5tV7sAAIDaBAk0IaX0LNpuV6/xUH9R4T2npCth/za1Cziwq7LtBwCga4IEWnEaEUe1izig3dRvWDogWp6TEBFxXruAVpRQRjcCAEAHBAm0YlO7gAOrtc1gV+l9p3KSUmp5S8yUNrULmMCudgEAAHMgSGDxylF+rZ5Zf2dX6X1b394QEbEpW2N4pBLGvKxdx6HlnHv4PAAA/JAggUUrD4Ctt6ffVNyXvav0vlM6ioht7SKWqgxY3NStYhIfaxcAADAXggSW7izano0QUfFhvgQYPTxAvUopndYuYqG20f5nMKKP7hwAgFEECSxWWQl9U7mMKdR+gKn9/lPZ2uLwML1saSh6+RwAAPyQIIEl29YuYCK7yu/fywPUUfTzZ32ylNKLiPh37Tom8tGxjwAAfxIksEgppU30sRJa/dz6jrY3RES8TCm1PnPjyUrnxq52HRMSMAEA3CNIYHHKSmgPWxoi5tN10dOD1C/lJBC+4l6I0MNcEPMLqQAAFgFJREFUhDs9/fwDAPyQIIFF6XAldFe7gOIiIm5rFzGh9ymlVe0iZmobESe1i5jQh9pdQQAAcyNIYDE6XAm9yTlf1i4i4r/bG3pblb0o3S8UKaVtRLyqXcfEevu5BwD4IUECi3AvROhpJXRuDzC9zQ44ioidMGFQQoTXteuY2E3OeW6fQwCA6gQJzF6nIULEfOYjRERE6Y64ql3HxIQJ0W2IENFfeAYAMIoggVlLKR1HnyHCbLY1fKHHB6u7MGFVu5CppZSepZQuos8QIWJmYR4AwFwIEpit8uB2Gf2FCBEzfWDPOW+jr6GLd44i4reeTnO4F+L1NhPhjiGLAADfIEhgllJKm4j4LfoZrPilOe/LnmXIMZH3pc2/aZ2HeHc2tQsAAJgrQQKzklJapZQuI+JN7Voq+phzvq5dxHf0HCRERLxOKV2WFfvmCPEiIuLTzD+DAABVCRKYhZTScVnp/S36XgWNmPm+7NLu/aF2HZWdRMRlSum0diH7Uj6Du+g7xLuzqV0AAMCcCRKWb9HT5O8FCH9EvwPd7lvKcXOb2gXMwFFE/CeldLH07oSU0lkMWxle1q5lBj7lnHe1iwAAmDNBwvKd1S7gMVJKp2UavADhrxaxbaC0fffelXDnVQzdCZvahTzUva1E/46+tzLct6ldAADA3KWcc+0aJpNSavUP+yHnvK5dxPeUFdtV+ToNDy1fcxsRx0uZFF++p39ULmNubiJiU063mK3yvTuPfk9k+JZPOedV7SIAAOZOkNCOdznnWXQnpJSexbDlYlX++SIintesaSHe5pw3tYt4iLItRUfJ380yUCgBwiZ8z77lJ9saAAB+TJDQlpsYVhkvI+J6n1PH74UDX1qVfx6Xrxeh2+AxFtWNcKf8XFyH7/m33H0mtzW/t2Uo5FmYgfA9uhEAAEYSJMA8LK4b4U6ZDWDS/499jOFEjt0UoUJK6UVErGPYSqQj6Mf+15GP8P/bu6Pjtq4sC8PrdvW7PRG0MjA7gmZHYDqCpiNoOYKhMpAiMBVBSxEMFcGIGVAZiBGceQA00rRlzyIF8AC431eFsp6gbbHIKvw8+1wA6AgJMN9Rnkb4ZHsq4X18WH2It0lukrzf1VH6f7uH5Dy+Hg9xMKthAADHQEiA+Y72NMIny7JcJvl19hxH7F02KyJfvv7Ip1WjT/+1UvR4Rx3yAABmEBJgrpP5ELMsy03s4HN8fhljHMVjVwEADsWfZg8AK3d1ChFhy9Fwjs2tiAAA8HBOJMA8H8YYz2YPsUvLsrxM8s/Zc0Dpr2OM97OHAAA4Nk4kwDyXswfYg6tsHnkIh+6ViAAA8DhOJMAcb8cYF7OH2IdlWc6T/NfsOeAPfEhydkJrRQAAT8qJBHh69znN0whJku3jDF/NngP+wKWIAADweEICPL1TumDx91zFigOH6cU2dgEA8EhWG+BpvRtjnM8e4iksy3KW5L9nzwFfuB1jnM0eAgDg2DmRAE/npFca/t32IrsXs+eArfskJ3kvCQDAUxMS4OlcjjHuZg/xlMYYV0nezZ4Dkjxf2/cfAMC+WG2Ap/F6jHE5e4gZlmX5Psldku8mj8J6rfb7DwBgH4QE2L/bJOcruGDxd7kvgYnciwAAsGNWG2C/7uNRc5/uS/h59hyszn2S89lDAACcGiEB9uty+yF69cYY10lez56D1bjPyk8CAQDsi5AA+/PLGOPN7CEOyXZP/Xb2HKzCcxEPAGA/hATYj9djjJezhzhQ5xET2K9ftidgAADYA5ctwu69G2Oczx7ikC3L8izJ+3iSA7vnCQ0AAHvmRALs1m2Si9lDHLoxxl02JxPu507CiRERAACegJAAu7P6xzw+xHZ//TxiArshIgAAPBGrDbAbIsIjLctyluQm1hx4POtEAABPyIkE+HYiwjdwMoFvZJ0IAOCJCQnwbUSEHRATeKTXY4wz338AAE9LSIDHExF2SEzggdyJAAAwiZAAj/MuIsLOiQmURAQAgImEBHi412MMEWFPvogJHyaPwmF6ISIAAMzlqQ3wML+MMV7OHmINlmX5PpunOfwweRQOx89jjOvZQwAArJ2QAJ37JBdjjJvZg6zJNia8TPKP2bMw1X02q0TvZw8CAIDVBmjcJjkTEZ7eGOPj9hj7i9mzMM2n7z8RAQDgQAgJ8MdebR8vdzd7kDUbY1wl+SkuYVyb19mcRLibPQgAAJ9ZbYCvs8pwgJZleZbkTdybsAbuIwEAOFBOJMBvvU3yTEQ4PGOMuzHGWZJXs2dhb26T/FVEAAA4XEICfHaf5KcxxoVHOx62McbzWHU4Ra/iUkUAgIMnJMDGq2xOIbyZPQid7dfqWTYnSDhunyLecxEPAODwuSOBtXuX5LnfgB63ZVkuklwn+W7yKDzc62y+BwUEAIAjISSwVh+SXI0xrmcPwm4sy/J9NjHhx8mj0PmQ5NJdJAAAx8dqA2tzn+TFGOOZiHBaxhgfxxgXSf6ezYdUDteLJGciAgDAcXIigbW4T/IyyUtHqNdhWZarJM9j3eGQvM1mjeFu9iAAADyekMCp+5BNQLgWENZnu+7wMsk/Zs+ycu+yWSW6mT0IAADfTkjgVN1mc/rgevYgzLcsy7MkVxEUnpq7SAAATpCQwCm5T/Imm4DgKQz8hqDwZAQEAIATJiRwCm6zOb7+xvoCDUFhbwQEAIAVEBI4VrfZPOrvjYvbeKwvgsJFXMr4LdyBAACwImsLCXdJ/jJ7Dh7tbZKbiAfs2PZSxstsnvLgZ0THKhEAwEqtLSRcJfnP2XNQu80mHNyMMd5MnoWVWJblPJuoYO3h66wSAQCs3KpCQpIsy/I+yQ+z5+A37pO8zzYcJHnvQwozbU8pXGQTFf42d5rpPmRz+uDa6QMAANYYEr7P5oOqmDDHp2Bwt33dJLmzqsAh296lcJHkPMmPM2d5QuIBAABftbqQkPxvTHiezW8a7UPvzrsv/ny3fSWbWBAXsXEKtj8/zvM5LJzSzxD3kAAA8P9aZUgA2JXtaYXzL17HEhb+zzqR0AcAQEtIANih7YmFs2yiwrPta/YdCx/yeZXofTZ3kNxNnAcAgCMmJAA8ge3JhS9fn4JDtn9+7L0tnyJB8nml6GM2weCj+w0AANg1IQEAAACo/Wn2AAAAAMDxEBIAAACAmpAAAAAA1IQEAAAAoCYkAAAAADUhAQAAAKgJCQAAAEBNSAAAAABqQgIAAABQExIAAACAmpAAAAAA1IQEAAAAoCYkAAAAADUhAQAAAKgJCQAAAEBNSAAAAABqQgIAAABQExIAAACAmpAAAAAA1IQEAAAAoCYkAAAAADUhAQAAAKgJCQAAAEBNSAAAAABqQgIAAABQExIAAACAmpAAAAAA1IQEAAAAoCYkAAAAADUhAQAAAKgJCQAAAEBNSAAAAABqQgIAAABQExIAAACAmpAAAAAA1IQEAAAAoCYkAAAAADUhAQAAAKgJCQAAAEBNSAAAAABqQgIAAABQExIAAACAmpAAAAAA1IQEAAAAoCYkAAAAADUhAQAAAKgJCQAAAEBNSAAAAABqQgIAAABQExIAAACAmpAAAAAA1IQEAAAAoCYkAAAAADUhAQAAAKgJCQAAAEBNSAAAAABqQgIAAABQExIAAACAmpAAAAAA1IQEAAAAoCYkAAAAADUhAQAAAKgJCQAAAEBNSAAAAABqQgIAAABQExIAAACAmpAAAAAA1IQEAAAAoCYkAAAAADUhAQAAAKgJCQAAAEBNSAAAAABqQgIAAABQExIAAACAmpAAAAAA1IQEAAAAoCYkAAAAADUhAQAAAKgJCQAAAEBNSAAAAABqQgIAAABQExIAAACAmpAAAAAA1IQEAAAAoCYkAAAAADUhAQAAAKgJCQAAAEBNSAAAAABqQgIAAABQExIAAACAmpAAAAAA1IQEAAAAoCYkAAAAADUhAQAAAKgJCQAAAEBNSAAAAABqQgIAAABQExIAAACAmpAAAAAA1IQEAAAAoCYkAAAAADUhAQAAAKgJCQAAAEBNSAAAAABqQgIAAABQExIAAACAmpAAAAAA1IQEAAAAoCYkAAAAADUhAQAAAKgJCQAAAEBNSAAAAABqQgIAAABQExIAAACAmpAAAAAA1IQEAAAAoCYkAAAAADUhAQAAAKgJCQAAAEBNSAAAAABqQgIAAABQExIAAACAmpAAAAAA1IQEAAAAoCYkAAAAADUhAQAAAKgJCQAAAEBNSAAAAABqQgIAAABQExIAAACAmpAAAAAA1IQEAAAAoCYkAAAAADUhAQAAAKgJCQAAAEBNSAAAAABqQgIAAABQ+/PsAWZaluU8yfMkP04e5aE+JLlO8nKM8XGff9GyLJdJrpL8ZZ9/D6twm+RqjPFm9iAAAMDjLWOM2TNMsSzLyyT/nD3HN7pNcr6PmLAsy/dJ3iT5267fm9V7Pca4nD0EAADwOKsMCcuyXCT51+w5duR2jHG26zddluUmIgL782KMcTV7CAAA4OHWGhI+Jvlu9hw79MsY4+Wu3my7zvDrrt4Pfsd/7Hs1BwAA2L3VXba4PY1wShEhSS53/H4XO34/+JrL2QMAAAAPt7qQkGTnawAH4Icdv9+xXT7JcXo2ewAAAODh1hgSgMNwilEPAABOnpAAAAAA1IQEAAAAoCYkAAAAADUhAQAAAKgJCQAAAEBNSAAAAABqQgIAAABQExIAAACAmpAAAAAA1IQEAAAAoCYkAAAAADUhAQAAAKgJCQAAAEBNSAAAAABqQgIAAABQExIAAACAmpAAAAAA1IQEAAAAoCYkAAAAADUhAQAAAKgJCQAAAEBNSAAAAABqQgIAAABQExIAAACAmpAAAAAA1IQEAAAAoCYkAAAAADUhAQAAAKgJCQAAAEBNSAAAAABqQgIAAABQExIAAACAmpAAAAAA1IQEAAAAoCYkAAAAADUhAQAAAKgJCQAAAEBNSOBr7mcPwCq8nz0AAADwcEICX3MzewBW4W72AAAAwMMJCXzNm9kDsArXswcAAAAeTkjgN8YY10nezZ6Dk/ZijPFx9hAAAMDDCQn8nouICezH6zHG1ewhAACAxxES+KoxxscxxnmSn5N8mDwOp+E2yU9jjMvZgwAAAI/359kDcNi2aw7Xk8f4Q8uyPEvy6XWZ5G/Thnl6H7L5+twk+TjG8CQEAABgr4QEjt4Y4y6fnwBwvSzLZZJfZ83zhF4nee6uAQAA4CkJCZycMcb1sizJaceE11YEAACAGdyRwEk68SdP3Cd5PnsIAABgnYQETtnL2QPsybV1BgAAYBYhgVN2M3uAPbmZPQAAALBeQgIn64R/a3+q/18AAMAREBIAAACAmpAAAAAA1IQEAAAAoCYkAAAAADUhAQAAAKgJCQAAAEBNSAAAAABqQgIAAABQExIAAACAmpAAAAAA1IQEAAAAoCYkAAAAADUhAQAAAKgJCQAAAEBNSAAAAABqQgIAAABQExIAAACAmpAAAAAA1IQEAAAAoCYkAAAAADUhAQAAAKgJCQAAAEBNSAAAAABqQgIAAABQExIAAACAmpAAAAAA1IQEAAAAoCYkAAAAADUhAQAAAKgJCQAAAEBNSAAAAABqQgIAAABQExIAAACAmpAAAAAA1IQEAAAAoCYkAAAAADUhAQAAAKgJCQAAAEBNSAAAAABqQgIAAABQExIAAACAmpAAAAAA1IQEAAAAoCYkAAAAADUhAQAAAKgJCQAAAEBNSAAAAABqQgIAAABQExIAAACAmpAAAAAA1IQEAAAAoCYkAAAAADUhAQAAAKgJCQAAAEBNSAAAAABqQgIAAABQExIAAACAmpAAAAAA1IQEAAAAoCYkAAAAADUhAQAAAKgJCQAAAEBNSAAAAABqQgIAAABQExIAAACAmpAAAAAA1IQEAAAAoCYkAAAAADUhAQAAAKgJCQAAAEBNSAAAAABqQgIAAABQExIAAACAmpAAAAAA1IQEAAAAoCYkAAAAADUhAQAAAKgJCQAAAEBNSAAAAABqQgIAAABQExIAAACAmpAAAAAA1IQEAAAAoCYkAAAAADUhAQAAAKgJCQAAAEBNSAAAAABqQgIAAABQExIAAACAmpAAAAAA1IQEAAAAoCYkAAAAADUhAQAAAKgJCQAAAEBNSAAAAABqQgIAAABQExIAAACAmpAAAAAA1IQEAAAAoCYkAAAAADUhAQAAAKgJCQAAAEBNSAAAAABqQgIAAABQExIAAACAmpAAAAAA1IQEAAAAoCYkAAAAADUhAQAAAKgJCQAAAEBNSAAAAABqQgIAAABQExIAAACAmpAAAAAA1IQEAAAAoCYkAAAAADUhAQAAAKgJCQAAAEBNSAAAAABqQgIAAABQExIAAACAmpAAAAAA1IQEAAAAoCYkAAAAADUhAQAAAKgJCQAAAEBNSAAAAABqQgIAAABQExIAAACAmpAAAAAA1IQEAAAAoCYkAAAAADUhAQAAAKgJCQAAAEBtjSHh/ewB9uB29gAH7OT+bcYYN7NnAAAA1mt1IWGM8SbJ/ew5dux69gAH7OXsAXbs9ewBAACAdVvGGLNneHLLslwm+XX2HDtyO8Y4mz3EIVuW5X2SH2bPsQP3Sc7GGHezBwEAANZrdScSkmSMcZ3k1ew5duA2yfnsIY7AeY5/xeE+yaWIAAAAzLbKkJAkY4znSf6e5O3sWR7hQ5IXSc7HGB9nD3Poxhgft6c2XmTzb3dM7rNZZzjbruUAAABMtcrVBgAAAOBxVnsiAQAAAHg4IQEAAACoCQkAAABATUgAAAAAakICAAAAUBMSAAAAgJqQAAAAANSEBAAAAKAmJAAAAAA1IQEAAACoCQkAAABATUgAAAAAakICAAAAUBMSAAAAgJqQAAAAANSEBAAAAKAmJAAAAAA1IQEAAACoCQkAAABATUgAAAAAakICAAAAUBMSAAAAgJqQAAAAANSEBAAAAKAmJAAAAAA1IQEAAACoCQkAAABATUgAAAAAakICAAAAUBMSAAAAgJqQAAAAANSEBAAAAKAmJAAAAAA1IQEAAACoCQkAAABATUgAAAAAakICAAAAUBMSAAAAgJqQAAAAANSEBAAAAKAmJAAAAAA1IQEAAACoCQkAAABATUgAAAAAakICAAAAUBMSAAAAgJqQAAAAANSEBAAAAKAmJAAAAAA1IQEAAACoCQkAAABATUgAAAAAakICAAAAUBMSAAAAgJqQAAAAANSEBAAAAKAmJAAAAAA1IQEAAACoCQkAAABATUgAAAAAakICAAAAUBMSAAAAgJqQAAAAANSEBAAAAKAmJAAAAAA1IQEAAACoCQkAAABATUgAAAAAakICAAAAUBMSAAAAgJqQAAAAANSEBAAAAKAmJAAAAAA1IQEAAACoCQkAAABATUgAAAAAakICAAAAUBMSAAAAgJqQAAAAANSEBAAAAKAmJAAAAAA1IQEAAACoCQkAAABATUgAAAAAakICAAAAUBMSAAAAgJqQAAAAANSEBAAAAKAmJAAAAAA1IQEAAACoCQkAAABATUgAAAAAakICAAAAUBMSAAAAgNr/AJ3E9aQUkzJHAAAAAElFTkSuQmCC"
                    />
                  </defs>
                </svg>
              </Link>
            </li>
            <li className="max-[760px]:hidden">
              <Link to={"/contact"} className="hover:font-bold">
                Contact
              </Link>
            </li>
            <li className="max-[760px]:hidden">
              <Link to={"/work"} className=" hover:font-bold">
                Work
              </Link>
            </li>
            <li className="hidden max-[760px]:inline">
              <button
                className=" hover:font-bold"
                onClick={() => {
                  if (!navbar) {
                    return setNavbar(true);
                  }

                  return setNavbar(false);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
        <div className="max-[1300px]:w-[20%] w-[15%] align-middle items-center  flex gap-4 max-[760px]:hidden">
          <div className="w-[60%]">
            <HeaderButton title="Login" url="" />
          </div>
          <div className="rounded-full  shadow-xl p-3">
            <a href="">
              <svg
                width={22}
                height={23}
                viewBox="0 0 23 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.13463 25.5349C6.60738 25.5349 6.16306 25.3379 5.80169 24.944C5.44029 24.55 5.25959 24.0657 5.25959 23.491C5.25959 22.9163 5.44029 22.432 5.80169 22.038C6.16306 21.6441 6.60738 21.4471 7.13463 21.4471C7.66186 21.4471 8.10617 21.6441 8.46756 22.038C8.82894 22.432 9.00963 22.9163 9.00963 23.491C9.00963 24.0657 8.82894 24.55 8.46756 24.944C8.10617 25.3379 7.66186 25.5349 7.13463 25.5349ZM18.8654 25.5349C18.3381 25.5349 17.8938 25.3379 17.5324 24.944C17.1711 24.55 16.9904 24.0657 16.9904 23.491C16.9904 22.9163 17.1711 22.432 17.5324 22.038C17.8938 21.6441 18.3381 21.4471 18.8654 21.4471C19.3926 21.4471 19.8369 21.6441 20.1983 22.038C20.5597 22.432 20.7404 22.9163 20.7404 23.491C20.7404 24.0657 20.5597 24.55 20.1983 24.944C19.8369 25.3379 19.3926 25.5349 18.8654 25.5349ZM5.35097 4.25779L8.6875 11.9091H16.9808C17.125 11.9091 17.2532 11.8698 17.3654 11.7912C17.4776 11.7126 17.5737 11.6034 17.6538 11.4637L20.9231 4.99147C21.0192 4.79932 21.0273 4.62901 20.9471 4.48053C20.867 4.33204 20.7308 4.25779 20.5385 4.25779H5.35097ZM4.74038 2.89522H21.0144C21.5577 2.89522 21.9664 3.13672 22.2404 3.61973C22.5144 4.10274 22.5288 4.60017 22.2837 5.11202L18.7115 12.2079C18.5304 12.5398 18.2953 12.8001 18.006 12.9887C17.7168 13.1774 17.399 13.2717 17.0529 13.2717H8.125L6.60578 16.3113C6.47757 16.5209 6.47356 16.748 6.59375 16.9926C6.71394 17.2371 6.89423 17.3594 7.13463 17.3594H20.1154C20.2933 17.3594 20.4419 17.4245 20.5613 17.5546C20.6807 17.6848 20.7404 17.8468 20.7404 18.0407C20.7404 18.2346 20.6807 18.3967 20.5613 18.5268C20.4419 18.6569 20.2933 18.722 20.1154 18.722H7.13463C6.40546 18.722 5.86139 18.3871 5.50241 17.7171C5.14343 17.0472 5.13461 16.3742 5.47597 15.6981L7.35575 12.0454L2.75959 1.53265H1.125C0.947104 1.53265 0.798458 1.46757 0.679063 1.33742C0.559688 1.2073 0.5 1.04528 0.5 0.85136C0.5 0.657443 0.559688 0.495423 0.679063 0.365297C0.798479 0.235149 0.947125 0.170074 1.125 0.170074H2.91587C3.11298 0.170074 3.29166 0.2251 3.45191 0.33515C3.61218 0.445201 3.73639 0.598933 3.82453 0.796347L4.74038 2.89522Z"
                  fill="#1C1B1F"
                />
              </svg>
            </a>
          </div>
        </div>
      </nav>
      {navbar ? (
        <div className="bg-white h-[250px] border-b-4 border-b-indigo-700">
          <ul className="px-4 h-[200px] grid grid-cols-1 gap-4">
            <Link
              to={"/products"}
              className=" border-b-2 h-full w-full font-mono text-lg focus:font-bold"
            >
              Products
            </Link>

            <Link
              to={"/about_us"}
              className="border-b-2 font-mono text-lg focus:font-bold"
            >
              About Us
            </Link>

            <Link
              to={"/contact"}
              className="border-b-2 font-mono text-lg focus:font-bold"
            >
              Contact
            </Link>

            <Link
              to={"/work"}
              className="border-b-2 font-mono text-lg focus:font-bold"
            >
              Work
            </Link>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
