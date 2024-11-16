// use std::{arch::aarch64::float32x2_t, error, fs, rc::Rc, sync::Arc};

// use tauri::api::dialog::FileDialogBuilder;



// #[tauri::command]
// pub fn select_folder() -> Result<String, String> {
//     let folder_path = FileDialogBuilder::new()
//         .pick_folder()
//         .ok_or_else(|| "未选择文件夹".to_string())?;

//     match folder_path.to_str() {
//         Some(path) => Ok(path.to_string()),
//         None => Err("无法读取文件夹路径".to_string()),
//     }
// }
// // #[tauri::command]
// // fn command_name<R: Runtime>(app: tauri::AppHandle<R>, window: tauri::Window<R>) -> Result<(), String> {
// //     let file  = FileDialogBuilder::new()
    
// // }

// // file列出來 
// fn file_list()->Result<(),error>{
//     fs()
// }

