var Timer1; // �^�C�}�[���i�[����ϐ��i�^�C�}�[ID�j�̐錾

// �J�E���g�_�E���֐���1000�~���b���ɌĂяo���֐�
function Start() {
	document.getElementById("start").disabled = true;
	Timer1 = setInterval("CountDown()", 1000);
	// �J�E���g�_�E���p�t�H�[������͕s�ɂ���
	document.getElementById("min").readOnly = true;
	document.getElementById("sec").readOnly = true;
}

// �^�C�}�[��~�֐�
function Stop() {
	document.getElementById("start").disabled = false;
	clearInterval(Timer1);
	// �J�E���g�_�E���p�t�H�[������͉\�ɂ���
	document.getElementById("min").readOnly = false;
	document.getElementById("sec").readOnly = false;
}

// �J�E���g�_�E���֐�
function CountDown() {
	var min = document.getElementById("min").value;
	var sec = document.getElementById("sec").value;

	if ((min == "") && (sec == "")) {
		alert("������ݒ肵�Ă��������I");
		ReSet();
	} else {
		if (min == "")
			min = 0;
		min = parseInt(min);

		if (sec == "")
			sec = 0;
		sec = parseInt(sec);

		TMWrite(min * 60 + sec - 1);
	}
}

// �c�莞�Ԃ������o���֐�
function TMWrite(int) {
	int = parseInt(int);

	if (int <= 0) {
		// TODO �I�����ԂɂȂ������̏���
		ReSet();
		alert("���Ԃł��I");
	} else {
		// �c�蕪����int��60�Ŋ����Đ؂�̂Ă�
		document.getElementById("min").value = Math.floor(int / 60);
		// �c��b����int��60�Ŋ������]��
		document.getElementById("sec").value = int % 60;
	}
}

// �t�H�[����������Ԃɖ߂��i���Z�b�g�j�֐�
function ReSet() {
	document.getElementById("min").value = "0";
	document.getElementById("sec").value = "0";
	document.getElementById("start").disabled = false;
	clearInterval(Timer1);
}