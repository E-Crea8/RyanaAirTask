const { registerBlockType } = wp.blocks;
const { MediaUpload } = wp.editor;
const { Button } = wp.components;

registerBlockType("ryanairlabs/custom-block", {
  title: "Dynamic image with data",
  icon: "upload",
  category: "media",
  attributes: {
    mimgURL: {
      type: "string",
      source: "attribute",
      attribute: "src",
      selector: "img",
    },
    imgID: {
      type: "number",
    },
    imgAlt: {
      type: "string",
      source: "attribute",
      attribute: "src",
      selector: "img",
    },
  },
  edit: function (props) {
    const onFileSelect = (img) => {
      props.setAttributes({
        imgURL: img.url,
        imgID: img.id,
        imgAlt: img.alt,
      });
    };

    const onRemoveImg = (img) => {
      props.setAttributes({
        imgURL: null,
        imgID: null,
        imgAlt: null,
      });
    };

    return (
      /*#__PURE__*/
      React.createElement(
        "div",
        {
          className: "media-wrapper",
        },
        props.attributes.imgURL
          ? /*#__PURE__*/ React.createElement(
              "div",
              {
                className: "img-upload-wrapper",
              },
              /*#__PURE__*/ React.createElement("img", {
                src: props.attributes.imgURL,
                alt: props.attributes.imgAlt,
              }),
              props.isSelected
                ? /*#__PURE__*/ React.createElement(
                    Button,
                    {
                      onClick: onRemoveImg,
                    },
                    "Remove"
                  )
                : null
            )
          : /*#__PURE__*/ React.createElement(MediaUpload, {
              onSelect: onFileSelect,
              value: props.attributes.imgID,
              render: ({ open }) =>
                /*#__PURE__*/ React.createElement(
                  Button,
                  {
                    onClick: open,
                  },
                  "Open Library"
                ),
            })
      )
    );
  },
  save: function (props) {
    /*#__PURE__*/
    React.createElement(
      "div",
      {
        className: "media-wrapper",
      },
      /*#__PURE__*/ React.createElement("img", {
        src: props.attributes.imgURL,
        alt: props.attributes.imgAlt,
      })
    );
  },
});
