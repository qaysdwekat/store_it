import{j as e}from"./jsx-runtime-CJyIrOno.js";import"./iframe-C7uKUQfw.js";import"./preload-helper-PPVm8Dsz.js";const y="_badge_uj5gu_714",_="_large_uj5gu_722",w="_medium_uj5gu_745",I="_small_uj5gu_762",S="_highContrast_uj5gu_778",k="_success_uj5gu_782",R="_neutral_uj5gu_786",W="_info_uj5gu_790",N="_warning_uj5gu_794",b="_danger_uj5gu_798",L="_rose_uj5gu_802",O="_orange_uj5gu_806",A="_cactus_uj5gu_810",D="_cyan_uj5gu_814",P="_indigo_uj5gu_818",T="_iris_uj5gu_822",V="_pink_uj5gu_826",q="_lowContrast_uj5gu_830",E="_outline_uj5gu_890",M="_plain_uj5gu_962",t={badge:y,large:_,medium:w,small:I,highContrast:S,success:k,neutral:R,info:W,warning:N,danger:b,rose:L,orange:O,cactus:A,cyan:D,indigo:P,iris:T,pink:V,lowContrast:q,outline:E,plain:M};function f(r){var n,o,i="";if(typeof r=="string"||typeof r=="number")i+=r;else if(typeof r=="object")if(Array.isArray(r)){var s=r.length;for(n=0;n<s;n++)r[n]&&(o=f(r[n]))&&(i&&(i+=" "),i+=o)}else for(o in r)r[o]&&(i&&(i+=" "),i+=o);return i}function H(){for(var r,n,o=0,i="",s=arguments.length;o<s;o++)(r=arguments[o])&&(n=f(r))&&(i&&(i+=" "),i+=n);return i}const X=(r,n,o)=>H(t.badge,t[r],t[n],t[o]);function a({color:r,children:n,variant:o,size:i="medium",iconLeft:s,iconRight:x}){const j=X(o,r,i);return e.jsxs("div",{className:j,children:[s,n&&e.jsx("p",{children:n}),x]})}a.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{color:{required:!0,tsType:{name:"union",raw:"keyof typeof BadgeColor",elements:[{name:"literal",value:"neutral"},{name:"literal",value:"info"},{name:"literal",value:"success"},{name:"literal",value:"warning"},{name:"literal",value:"danger"},{name:"literal",value:"rose"},{name:"literal",value:"orange"},{name:"literal",value:"cactus"},{name:"literal",value:"cyan"},{name:"literal",value:"indigo"},{name:"literal",value:"iris"},{name:"literal",value:"pink"}]},description:""},variant:{required:!0,tsType:{name:"union",raw:"keyof typeof BadgeVariant",elements:[{name:"literal",value:"highContrast"},{name:"literal",value:"lowContrast"},{name:"literal",value:"outline"},{name:"literal",value:"plain"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"keyof typeof BadgeSize",elements:[{name:"literal",value:"small"},{name:"literal",value:"medium"},{name:"literal",value:"large"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},iconLeft:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},iconRight:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!1,tsType:{name:"string"},description:""}}};const K={title:"Components/Badge",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:"select",options:["neutral","info","success","warning","danger","rose","orange","cactus","cyan","indigo","iris","pink"],description:"Badge color variant",table:{type:{summary:"BadgeColor"}}},variant:{control:"select",options:["highContrast","lowContrast","outline","plain"],description:"Badge style variant",table:{type:{summary:"BadgeVariant"}}},size:{control:"select",options:["small","medium","large"],description:"Badge size",table:{type:{summary:"BadgeSize"}}},children:{control:"text",description:"Badge text content"},iconLeft:{control:!1,description:"Icon on the left side"},iconRight:{control:!1,description:"Icon on the right side"}}},l={args:{color:"neutral",variant:"lowContrast",size:"medium",children:"Badge Label"}},c={args:{color:"success",variant:"outline",size:"medium",children:"Verified"}},d={args:{color:"danger",variant:"highContrast",size:"medium",children:"Error"}},u={args:{color:"info",variant:"highContrast",size:"medium",children:"Notification"}},m={args:{color:"warning",variant:"highContrast",size:"medium"}},g={args:{color:"info",variant:"highContrast",size:"small",children:"Small"}},p={args:{color:"info",variant:"highContrast",size:"medium",children:"Medium"}},h={args:{color:"info",variant:"highContrast",size:"large",children:"Large"}},v={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(a,{variant:"highContrast",size:"medium",color:"neutral",children:"Neutral"}),e.jsx(a,{variant:"highContrast",size:"medium",color:"info",children:"Info"}),e.jsx(a,{variant:"highContrast",size:"medium",color:"success",children:"Success"}),e.jsx(a,{variant:"highContrast",size:"medium",color:"warning",children:"Warning"}),e.jsx(a,{variant:"highContrast",size:"medium",color:"danger",children:"Danger"}),e.jsx(a,{variant:"highContrast",size:"medium",color:"rose",children:"Rose"}),e.jsx(a,{variant:"highContrast",size:"medium",color:"orange",children:"Orange"}),e.jsx(a,{variant:"highContrast",size:"medium",color:"cactus",children:"Cactus"}),e.jsx(a,{variant:"highContrast",size:"medium",color:"cyan",children:"Cyan"}),e.jsx(a,{variant:"highContrast",size:"medium",color:"indigo",children:"Indigo"}),e.jsx(a,{variant:"highContrast",size:"medium",color:"iris",children:"Iris"}),e.jsx(a,{variant:"highContrast",size:"medium",color:"pink",children:"Pink"})]})},z={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(a,{variant:"lowContrast",size:"medium",color:"neutral",children:"Neutral"}),e.jsx(a,{variant:"lowContrast",size:"medium",color:"info",children:"Info"}),e.jsx(a,{variant:"lowContrast",size:"medium",color:"success",children:"Success"}),e.jsx(a,{variant:"lowContrast",size:"medium",color:"warning",children:"Warning"}),e.jsx(a,{variant:"lowContrast",size:"medium",color:"danger",children:"Danger"}),e.jsx(a,{variant:"lowContrast",size:"medium",color:"rose",children:"Rose"}),e.jsx(a,{variant:"lowContrast",size:"medium",color:"orange",children:"Orange"}),e.jsx(a,{variant:"lowContrast",size:"medium",color:"cactus",children:"Cactus"}),e.jsx(a,{variant:"lowContrast",size:"medium",color:"cyan",children:"Cyan"}),e.jsx(a,{variant:"lowContrast",size:"medium",color:"indigo",children:"Indigo"}),e.jsx(a,{variant:"lowContrast",size:"medium",color:"iris",children:"Iris"}),e.jsx(a,{variant:"lowContrast",size:"medium",color:"pink",children:"Pink"})]})},B={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(a,{variant:"outline",size:"medium",color:"neutral",children:"Neutral"}),e.jsx(a,{variant:"outline",size:"medium",color:"info",children:"Info"}),e.jsx(a,{variant:"outline",size:"medium",color:"success",children:"Success"}),e.jsx(a,{variant:"outline",size:"medium",color:"warning",children:"Warning"}),e.jsx(a,{variant:"outline",size:"medium",color:"danger",children:"Danger"}),e.jsx(a,{variant:"outline",size:"medium",color:"rose",children:"Rose"}),e.jsx(a,{variant:"outline",size:"medium",color:"orange",children:"Orange"}),e.jsx(a,{variant:"outline",size:"medium",color:"cactus",children:"Cactus"}),e.jsx(a,{variant:"outline",size:"medium",color:"cyan",children:"Cyan"}),e.jsx(a,{variant:"outline",size:"medium",color:"indigo",children:"Indigo"}),e.jsx(a,{variant:"outline",size:"medium",color:"iris",children:"Iris"}),e.jsx(a,{variant:"outline",size:"medium",color:"pink",children:"Pink"})]})},C={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(a,{variant:"plain",size:"medium",color:"neutral",children:"Neutral"}),e.jsx(a,{variant:"plain",size:"medium",color:"info",children:"Info"}),e.jsx(a,{variant:"plain",size:"medium",color:"success",children:"Success"}),e.jsx(a,{variant:"plain",size:"medium",color:"warning",children:"Warning"}),e.jsx(a,{variant:"plain",size:"medium",color:"danger",children:"Danger"}),e.jsx(a,{variant:"plain",size:"medium",color:"rose",children:"Rose"}),e.jsx(a,{variant:"plain",size:"medium",color:"orange",children:"Orange"}),e.jsx(a,{variant:"plain",size:"medium",color:"cactus",children:"Cactus"}),e.jsx(a,{variant:"plain",size:"medium",color:"cyan",children:"Cyan"}),e.jsx(a,{variant:"plain",size:"medium",color:"indigo",children:"Indigo"}),e.jsx(a,{variant:"plain",size:"medium",color:"iris",children:"Iris"}),e.jsx(a,{variant:"plain",size:"medium",color:"pink",children:"Pink"})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'neutral',
    variant: 'lowContrast',
    size: 'medium',
    children: 'Badge Label'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'success',
    variant: 'outline',
    size: 'medium',
    children: 'Verified'
    // iconLeft: <IconCheck size={16} />,
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'danger',
    variant: 'highContrast',
    size: 'medium',
    children: 'Error'
    // iconRight: <IconX size={16} />,
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'info',
    variant: 'highContrast',
    size: 'medium',
    children: 'Notification'
    // iconLeft: <IconBell size={16} />,
    // iconRight: <IconStar size={16} />,
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'warning',
    variant: 'highContrast',
    size: 'medium'
    // iconLeft: <IconStar size={16} />,
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'info',
    variant: 'highContrast',
    size: 'small',
    children: 'Small'
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'info',
    variant: 'highContrast',
    size: 'medium',
    children: 'Medium'
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'info',
    variant: 'highContrast',
    size: 'large',
    children: 'Large'
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  }}>
      <Badge variant="highContrast" size="medium" color="neutral">
        Neutral
      </Badge>
      <Badge variant="highContrast" size="medium" color="info">
        Info
      </Badge>
      <Badge variant="highContrast" size="medium" color="success">
        Success
      </Badge>
      <Badge variant="highContrast" size="medium" color="warning">
        Warning
      </Badge>
      <Badge variant="highContrast" size="medium" color="danger">
        Danger
      </Badge>
      <Badge variant="highContrast" size="medium" color="rose">
        Rose
      </Badge>
      <Badge variant="highContrast" size="medium" color="orange">
        Orange
      </Badge>
      <Badge variant="highContrast" size="medium" color="cactus">
        Cactus
      </Badge>
      <Badge variant="highContrast" size="medium" color="cyan">
        Cyan
      </Badge>
      <Badge variant="highContrast" size="medium" color="indigo">
        Indigo
      </Badge>
      <Badge variant="highContrast" size="medium" color="iris">
        Iris
      </Badge>
      <Badge variant="highContrast" size="medium" color="pink">
        Pink
      </Badge>
    </div>
}`,...v.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  }}>
      <Badge variant="lowContrast" size="medium" color="neutral">
        Neutral
      </Badge>
      <Badge variant="lowContrast" size="medium" color="info">
        Info
      </Badge>
      <Badge variant="lowContrast" size="medium" color="success">
        Success
      </Badge>
      <Badge variant="lowContrast" size="medium" color="warning">
        Warning
      </Badge>
      <Badge variant="lowContrast" size="medium" color="danger">
        Danger
      </Badge>
      <Badge variant="lowContrast" size="medium" color="rose">
        Rose
      </Badge>
      <Badge variant="lowContrast" size="medium" color="orange">
        Orange
      </Badge>
      <Badge variant="lowContrast" size="medium" color="cactus">
        Cactus
      </Badge>
      <Badge variant="lowContrast" size="medium" color="cyan">
        Cyan
      </Badge>
      <Badge variant="lowContrast" size="medium" color="indigo">
        Indigo
      </Badge>
      <Badge variant="lowContrast" size="medium" color="iris">
        Iris
      </Badge>
      <Badge variant="lowContrast" size="medium" color="pink">
        Pink
      </Badge>
    </div>
}`,...z.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  }}>
      <Badge variant="outline" size="medium" color="neutral">
        Neutral
      </Badge>
      <Badge variant="outline" size="medium" color="info">
        Info
      </Badge>
      <Badge variant="outline" size="medium" color="success">
        Success
      </Badge>
      <Badge variant="outline" size="medium" color="warning">
        Warning
      </Badge>
      <Badge variant="outline" size="medium" color="danger">
        Danger
      </Badge>
      <Badge variant="outline" size="medium" color="rose">
        Rose
      </Badge>
      <Badge variant="outline" size="medium" color="orange">
        Orange
      </Badge>
      <Badge variant="outline" size="medium" color="cactus">
        Cactus
      </Badge>
      <Badge variant="outline" size="medium" color="cyan">
        Cyan
      </Badge>
      <Badge variant="outline" size="medium" color="indigo">
        Indigo
      </Badge>
      <Badge variant="outline" size="medium" color="iris">
        Iris
      </Badge>
      <Badge variant="outline" size="medium" color="pink">
        Pink
      </Badge>
    </div>
}`,...B.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  }}>
      <Badge variant="plain" size="medium" color="neutral">
        Neutral
      </Badge>
      <Badge variant="plain" size="medium" color="info">
        Info
      </Badge>
      <Badge variant="plain" size="medium" color="success">
        Success
      </Badge>
      <Badge variant="plain" size="medium" color="warning">
        Warning
      </Badge>
      <Badge variant="plain" size="medium" color="danger">
        Danger
      </Badge>
      <Badge variant="plain" size="medium" color="rose">
        Rose
      </Badge>
      <Badge variant="plain" size="medium" color="orange">
        Orange
      </Badge>
      <Badge variant="plain" size="medium" color="cactus">
        Cactus
      </Badge>
      <Badge variant="plain" size="medium" color="cyan">
        Cyan
      </Badge>
      <Badge variant="plain" size="medium" color="indigo">
        Indigo
      </Badge>
      <Badge variant="plain" size="medium" color="iris">
        Iris
      </Badge>
      <Badge variant="plain" size="medium" color="pink">
        Pink
      </Badge>
    </div>
}`,...C.parameters?.docs?.source}}};const Q=["Default","WithIconLeft","WithIconRight","WithBothIcons","IconOnly","Small","Medium","Large","AllHighContrastColors","AllLowContrastColors","AllOutlineColors","AllPlainColors"];export{v as AllHighContrastColors,z as AllLowContrastColors,B as AllOutlineColors,C as AllPlainColors,l as Default,m as IconOnly,h as Large,p as Medium,g as Small,u as WithBothIcons,c as WithIconLeft,d as WithIconRight,Q as __namedExportsOrder,K as default};
