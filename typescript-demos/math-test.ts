//import export is a ES2015 feture
//not yet implemented by browsers
//but typescript uses special translation to 
//make import export work
import {sum,average} from './library/math';

namespace mathtest{

    console.log(sum(1,2,3,4));
    console.log(average(1,2,3,4));
}
