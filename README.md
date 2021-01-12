## Progressive Image Loading

When I first played around with how to progressively load an image without a plugin, I thought about just using CSS. So I made a keyframe animation and set a 1.5s time on the animation and let the image gradually sharpen. As I thought about it, I realized that while I may be seeing the desired result on my screen, someone with slower internet may still see the clunky image load from top to bottom. So I went back and upgraded the feature by using React Hooks. I employed useReducer instead of useState because in this case, one state depended on another. This allowed me to first load the thumbnail, then the fullsize image once it was done loading. To make this transition a bit smoother, I added back in a short keyframe animation so there appears to be a progressive transition between the blurred thumbnail image and the fullsize image.

To run app locally, use command "npm start".
