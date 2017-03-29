$(document).ready(function(){
	/*ĐỊNH NGHĨA ĐỂ XÉT TRƯỜNG HỢP CHƯA CHỌN SELECT*/
	$.validator.addMethod("valueNotEquals", function(value, element, arg){
  		return arg != value;
 	}, "Value must not equal arg.");
 	$.validator.addMethod("age_valueMax_greater_age_valueMin", function(value, element) {
 		debuga:true;
	    return $("#age_valueMax").val() > $("#age_valueMin").val()
	}, "* Giá trị kết thúc phải lớn hơn giá trị bắt đầu");
 	/*Ngưỡng*/
	$("#frmNguong").validate({
		rules: {
			threshold_name: {
				required: true,
				minlength: 3,
				maxlength: 60,
			},
			datatype_id: {
				valueNotEquals: "-1",
			},
			region_id: {
				valueNotEquals: "-1",
			},
			age_id: {
				valueNotEquals: "-1",
			},
			species_id: {
				valueNotEquals: "-1",
			},
			threshold_level: {
				valueNotEquals: "-1",
			},
			threshold_start: {
				required: true,
				number: true,
				maxlength: 4,
			},
			threshold_end: {
				required: true,
				number: true,
				maxlength: 4,
			},
		},
		messages: {
			threshold_name: {
				required: 'Tên ngưỡng không được rỗng.',
				minlength: 'Tên ngưỡng phải có ít nhất 4 kí tự',
				maxlength: 'Tên ngưỡng không được vượt quá 60 kí tự',
			},
			datatype_id: {
				valueNotEquals: 'Vui lòng chọn loại dữ liệu',
			},
			region_id: {
				valueNotEquals: 'Vui lòng chọn vùng',
			},
			age_id: {
				valueNotEquals: 'Vui lòng chọn độ tuổi của tôm',
			},
			species_id: {
				valueNotEquals: 'Vui lòng chọn loại giống',
			},
			threshold_level: {
				valueNotEquals: 'Vui lòng chọn cấp độ',
			},
			threshold_start: {
				required: 'Số liệu ngưỡng bắt đầu không được rỗng.',
				number: 'Số liệu ngưỡng bắt đầu không hợp lệ',
				maxlength: 'Số liệu nhập quá lớn có thể không hợp lệ',
			},
			threshold_end: {
				required: 'Số liệu ngưỡng kết thúc không được rỗng.',
				number: 'Số liệu ngưỡng kết thúc không hợp lệ',
				maxlength: 'Số liệu nhập quá lớn có thể không hợp lệ',
			},
		}
	});
	/*Lời khuyên*/
	$("#frmLoiKhuyen").validate({
		rules: {
			advice_message: {
				required: true,
				minlength: 8,
				maxlength: 1000,
			},
			threshold_id: {
				valueNotEquals: "-1",
			},
		},
		messages: {
			advice_message: {
				required: 'Lời khuyên không được rỗng.',
				minlength: 'Lời khuyên phải có ít nhất 8 kí tự',
				maxlength: 'Lời khuyên không được vượt quá 1000 kí tự',
			},
			
			threshold_id: {
				valueNotEquals: 'Vui lòng chọn ngưỡng để cho lời khuyên',
			},
		}
	});
	/*Độ tuổi*/
	$("#frmDoTuoi").validate({
		rules: {
			age_valueMin: {
				required: true,
				number: true,
				range: [0,400],
			},
			age_valueMax: {
				required: true,
				number: true,
				range: [0,400],
				age_valueMax_greater_age_valueMin:true,
			},
			age_description: {
				required: true,
				maxlength: 1000,
			},
		},
		messages: {
			age_valueMin: {
				required: 'Giá trị bắt đầu không được rỗng.',
				number: "Dữ liệu nhập phải là số",
				range: "Dữ liệu không hợp lệ. Dữ liệu nhập phải là số dương. Không lớn hơn 400",
			},
			age_valueMax: {
				required: 'Giá trị kết thúc không được rỗng.',
				number: "Dữ liệu nhập phải là số",
				range: "Dữ liệu không hợp lệ. Dữ liệu nhập phải là số dương. Không lớn hơn 400",
				age_valueMax_greater_age_valueMin: "Giá trị kết thúc phải lớn hơn giá trị bắt đầu",
			},
			age_description: {
				required: 'Mô tả không được rỗng.',
				maxlength: 'Mô tả không được vượt quá 1000 kí tự',
			},
		}
	});
	/*Loại dữ liệu*/
	$("#frmLoaiDuLieu").validate({
		rules: {
			datatype_id: {
				required: true,
				minlength: 3,
				maxlength: 8,
			},
			datatype_name: {
				required: true,
				minlength: 6,
				maxlength: 100,
			},
			datatype_description: {
				required: true,
				maxlength: 1000,
			},
			datatype_unit: {
				required: true,
				maxlength: 20,
			},
		},
		messages: {
			datatype_id: {
				required: 'Id loại dữ liệu không được rỗng.',
				minlength: "Id nhập không hợp lệ",
				maxlength: 'Id quá dài',
			},
			datatype_name: {
				required: 'Tên loại dữ liệu không được rỗng.',
				minlength: "Tên loại dữ liệu phải nhập ít nhất 6 ký tự",
				maxlength: 'Tên loại dữ liệu không được nhiều hơn 100 kí tự',
			},
			datatype_description: {
				required: 'Mô tả về loại dữ liệu không được rỗng.',
				maxlength: 'Mô tả về loại dữ liệu không được vượt quá 1000 kí tự',
			},
			datatype_unit: {
				required: 'Đơn vị của loại dữ liệu không được rỗng.',
				maxlength: 'Đơn vị không được vượt quá 20 kí tự',
			},
		}
	});
	/*Loại dữ liệu*/
	$("#frmLoaiThaNuoi").validate({
		rules: {
			species_name: {
				required: true,
				minlength: 3,
				maxlength: 100,
			},
		},
		messages: {
			species_name: {
				required: 'Tên loài không được rỗng.',
				minlength: "Tên loài phải có ít nhất 3 kí tự",
				maxlength: 'Tên loài không được nhiều hơn 100 kí tự',
			},
		}
	});
	$("#frmVung").validate({
		rules: {
			region_name: {
				required: true,
				minlength: 5,
				maxlength: 100,
			},
			region_description: {
				required: true,
				minlength: 5,
				maxlength: 1000,
			},
			selectWARD: {
				valueNotEquals: "-1",
			},
		},
		messages: {
			region_name: {
				required: 'Tên vùng không được rỗng.',
				minlength: "Tên vùng phải có ít nhất 5 kí tự",
				maxlength: 'Tên vùng không được nhiều hơn 100 kí tự',
			},
			region_description: {
				required: 'Mô tả về vùng không được rỗng.',
				minlength: "Mô tả về vùng phải có ít nhất 5 kí tự",
				maxlength: 'Tên vùng không được nhiều hơn 1000 kí tự',
			},
			selectWARD: {
				valueNotEquals: 'Vui lòng chọn xã',
			},
		}
	});
	$("#frmAo").validate({
		rules: {
			pond_width: {
				required: true,
				range: [1,5000],
				number:true,
			},
			pond_height: {
				required: true,
				range: [1,5000],
				number:true,
			},
			pond_depth: {
				required: true,
				range: [1,60],
				number:true,
			},
			pond_address: {
				required: true,
				minlength: 10,
				maxlength: 200,
			},
		},
		messages: {
			pond_width: {
				required: 'Độ rộng của ao không được rỗng.',
				range: "Dữ liệu không hợp lệ",
				number: "Vui lòng nhập số",
			},
			pond_height: {
				required: 'Chiều dài của ao không được rỗng.',
				range: "Dữ liệu không hợp lệ",
				number: "Vui lòng nhập số",
			},
			pond_depth: {
				required: 'Độ sâu của ao không được rỗng.',
				range: "Dữ liệu không hợp lệ",
				number: "Vui lòng nhập số",
			},
			pond_address: {
				required: 'Mô tả về ao không được rỗng.',
				minlength: "Mô tả về ao phải có ít nhất 10EEE kí tự",
				maxlength: '"Mô tả về ao không được nhiều hơn 200 kí tự',
			},
		}
	});
}); // end document.ready