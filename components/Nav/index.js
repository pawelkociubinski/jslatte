import { Wrapper, Svg } from "./styles";

// const elements = new Map([
//   ['a', 'M200 150h150L200 300z'],
//   ['b', 'M200 150v200L0 150z'],
//   ['c', 'M0 0h150L0 150z'],
//   ['d', 'M150 0h299L300 149v1H0z'],
//   ['e', 'M0 300V150l150 150z'],
//   ['f', 'M0 300h150L0 450z'],
//   ['g', 'M449 150H299L449 0z'],
//   ['h', 'M449 0h150L449 150z']
// ]);

// const elements = [];
// width="1199" height="600"
// width="599" height="450"

const Nav = () => {
  return (
    <Wrapper>
      <Svg
        width="599"
        height="450"
        viewBox="0 0 599 450"
      >
        <defs>
          <path id="a" d="M200 150h150L200 300z" />
          <path id="b" d="M200 150v200L0 150z" />
          <path id="c" d="M0 0h150L0 150z"/>
          <path id="d" d="M150 0h299L300 149v1H0z"/>
          <path id="e" d="M0 300V150l150 150z"/>
          <path id="f" d="M0 300h150L0 450z"/>
          <path id="g" d="M449 150H299L449 0z"/>
          <path id="h" d="M449 0h150L449 150z"/>
        </defs>
        <g fill="none">
          <use fill="#EFDA5B" xlinkHref="#a"/>
          <path stroke="#FFF" strokeWidth="5" d="M202 152v143.172L345.172 152H202z"/>
          <use fill="#EFDA5B" xlinkHref="#b"/>
          <path stroke="#FFF" strokeWidth="5" d="M198 152H4.828L198 345.172V152z"/>
          <use fill="#EFDA5B" xlinkHref="#c"/>
          <path stroke="#FFF" strokeWidth="5" d="M2 2v143.172L145.172 2H2z"/>
          <use fill="#EFDA5B" xlinkHref="#d"/>
          <path stroke="#FFF" strokeWidth="5" d="M150.828 2l-146 146h293.344l146-146H150.828z"/>
          <use fill="#EFDA5B" xlinkHref="#e"/>
          <path stroke="#FFF" strokeWidth="5" d="M2 298h143.172L2 154.828V298z"/>
          <use fill="#EFDA5B" xlinkHref="#f"/>
          <path stroke="#FFF" strokeWidth="5" d="M2 302v143.172L145.172 302H2z"/>
          <use fill="#EFDA5B" xlinkHref="#g"/>
          <path stroke="#FFF" strokeWidth="5" d="M447 148V4.828L303.828 148H447z"/>
          <use fill="#EFDA5B" xlinkHref="#h"/>
          <path stroke="#FFF" strokeWidth="5" d="M451 2v143.172L594.172 2H451z"/>
        </g>
      </Svg>
    </Wrapper>
  )
};

export default Nav;
