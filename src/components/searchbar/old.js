// function Example() {
//   function CustomRadio(props) {
//     const { image, ...radioProps } = props;
//     const { state, getInputProps, getCheckboxProps, htmlProps, getLabelProps } =
//       useRadio(radioProps);
//     //MELI ICON https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.21.22/mercadolibre/favicon.svg
//     //G1 ICON https://s2.glbimg.com/aFlLEuzGSYw2KtjvARZnCsFtgnk=/114x114/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/H/w/YbA657S3aYVfC0P9wboQ/g1-favicon.png
//     //JUST WATCH ICON https://www.justwatch.com/appassets/favicon.ico
//     return (
//       <label {...htmlProps} cursor="pointer">
//         <input {...getInputProps({})} hidden />
//         <Box
//           {...getCheckboxProps()}
//           bg={state.isChecked ? "green.200" : "transparent"}
//           w={10}
//           p={1}
//           rounded="full"
//           dir="row"
//         >
//           <Image src={image} rounded="full" {...getLabelProps()} />
//         </Box>
//       </label>
//     );
//   }

//   const avatars = [
//     {
//       name: "Mercado Livre",
//       image:
//         "https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.21.22/mercadolibre/favicon.svg",
//     },
//     {
//       name: "G1",
//       image:
//         "https://s2.glbimg.com/aFlLEuzGSYw2KtjvARZnCsFtgnk=/114x114/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/H/w/YbA657S3aYVfC0P9wboQ/g1-favicon.png",
//     },
//     {
//       name: "Filmes",
//       image: "https://www.justwatch.com/appassets/favicon.ico",
//     },
//   ];

//   const handleChange = (value) => {};

//   const { value, getRadioProps, getRootProps } = useRadioGroup({
//     defaultValue: "Mercado Livre",
//     onChange: handleChange,
//   });

//   return (
//     <Stack {...getRootProps()}>
//       <Text>Buscar em {value}</Text>
//       <HStack>
//         {avatars.map((avatar) => {
//           return (
//             <CustomRadio
//               key={avatar.name}
//               image={avatar.image}
//               {...getRadioProps({ value: avatar.name })}
//             />
//           );
//         })}
//       </HStack>
//     </Stack>
//   );
// }
