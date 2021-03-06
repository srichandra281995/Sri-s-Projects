const writeBlog = 1;
const readBlog = 2;
const delBlog = 4;
const  addUser = 8;
const deleteUser = 16;

//groups

const admin = writeBlog | readBlog | delBlog | addUser | deleteUser;
const moderator = readBlog | delBlog | deleteUser;
const writer = writeBlog | readBlog; //3
const guest = readBlog;


function checkPermission(role, permission){
    return role & permission ? true : false;
}
checkPermission(writer, readBlog);//

checkPermission(writer, delBlog);




