  // Search API�����[�h����
  google.load( 'search', '1' );
  
  console.log("p1");

  function OnLoad()
  {
      // �����R���g���[�����쐬����
      var searchControl = new google.search.SearchControl();

      // �����R���g���[���ɉ摜�����̃T�[�`���[��ǉ�����
      searchControl.addSearcher( new google.search.ImageSearch() );

      // �����R���g���[����`�悷��
      searchControl.draw( document.getElementById( 'content' ) );
	  console.log("draw method");
	  
      // ���������s����
      searchControl.execute( 'sky' );
  }
  
  // �h�L�������g�����[�h���ꂽ��ɌĂяo�����n���h���֐���o�^����
  google.setOnLoadCallback( OnLoad );