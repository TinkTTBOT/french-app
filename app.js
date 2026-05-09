const sections = document.querySelectorAll('.section');
const menuButtons = document.querySelectorAll('.menu-item');
const currentSectionTitle = document.getElementById('currentSectionTitle');
const streakCounter = document.getElementById('streakCounter');
const wordsLearned = document.getElementById('wordsLearned');
const grammarRead = document.getElementById('grammarRead');
const quizScore = document.getElementById('quizScore');
const favoriteCount = document.getElementById('favoriteCount');
const flashcardWord = document.getElementById('flashcardWord');
const flashcardDefinition = document.getElementById('flashcardDefinition');
const vocabList = document.getElementById('vocabList');
const grammarList = document.getElementById('grammarList');
const grammarProgress = document.getElementById('grammarProgress');
const grammarLevelButtons = document.getElementById('grammarLevelButtons');
const grammarTagButtons = document.getElementById('grammarTagButtons');
const grammarStatusButtons = document.getElementById('grammarStatusButtons');
const vocabSearch = document.getElementById('vocabSearch');
const grammarSearch = document.getElementById('grammarSearch');
const clearSearch = document.getElementById('clearSearch');
const levelButtons = document.querySelectorAll('.level-button');
const activityHistory = document.getElementById('activityHistory');
const roadmapList = document.getElementById('roadmapList');
const resetRoadmap = document.getElementById('resetRoadmap');
const practicePrompt = document.getElementById('practicePrompt');
const practiceAnswer = document.getElementById('practiceAnswer');
const practiceFeedback = document.getElementById('practiceFeedback');
const quizQuestion = document.getElementById('quizQuestion');
const quizAnswers = document.getElementById('quizAnswers');
const quizStatus = document.getElementById('quizStatus');
const nextQuestion = document.getElementById('nextQuestion');
const quizFilterSummary = document.getElementById('quizFilterSummary');
const quizLevelButtons = document.getElementById('quizLevelButtons');
const quizTopicButtons = document.getElementById('quizTopicButtons');
const quizModeVocab = document.getElementById('quizModeVocab');
const quizModeGrammar = document.getElementById('quizModeGrammar');
const themeToggle = document.getElementById('themeToggle');
const themeToggleBottom = document.getElementById('themeToggleBottom');
const newFlashcard = document.getElementById('newFlashcard');
const playPronunciation = document.getElementById('playPronunciation');
const showExample = document.getElementById('showExample');
const startQuiz = document.getElementById('startQuiz');
const checkAnswer = document.getElementById('checkAnswer');
const nextPrompt = document.getElementById('nextPrompt');
const practiceTabs = document.querySelectorAll('.practice-tab');
const translatePanel = document.getElementById('translatePanel');
const speakingPanel = document.getElementById('speakingPanel');
const pronunciationPanel = document.getElementById('pronunciationPanel');
const dialoguePanel = document.getElementById('dialoguePanel');
const speakingPrompt = document.getElementById('speakingPrompt');
const speakingRecognized = document.getElementById('speakingRecognized');
const speakingFeedback = document.getElementById('speakingFeedback');
const startSpeaking = document.getElementById('startSpeaking');
const nextSpeaking = document.getElementById('nextSpeaking');
const pronunciationPrompt = document.getElementById('pronunciationPrompt');
const playPronunciationPhrase = document.getElementById('playPronunciationPhrase');
const startPronunciation = document.getElementById('startPronunciation');
const nextPronunciation = document.getElementById('nextPronunciation');
const pronunciationRecognized = document.getElementById('pronunciationRecognized');
const pronunciationFeedback = document.getElementById('pronunciationFeedback');
const dialogueText = document.getElementById('dialogueText');
const dialogueTitle = document.getElementById('dialogueTitle');
const toggleDialogueTranslation = document.getElementById('toggleDialogueTranslation');
const nextDialogue = document.getElementById('nextDialogue');
const favoriteFilter = document.getElementById('favoriteFilter');
const topicButtons = document.getElementById('topicButtons');
const dashboardChallenge = document.getElementById('dashboardChallenge');
const refreshChallenge = document.getElementById('refreshChallenge');
const speakDialogueLine = document.getElementById('speakDialogueLine');
const vocabResultSummary = document.getElementById('vocabResultSummary');
const loadMoreVocab = document.getElementById('loadMoreVocab');
const completeDailyGoal = document.getElementById('completeDailyGoal');
const dailyGoalStatus = document.getElementById('dailyGoalStatus');
const exportBackup = document.getElementById('exportBackup');
const importBackupInput = document.getElementById('importBackupInput');
const backupStatus = document.getElementById('backupStatus');
const authEmail = document.getElementById('authEmail');
const authPassword = document.getElementById('authPassword');
const togglePasswordBtn = document.getElementById('togglePasswordBtn');
const registerBtn = document.getElementById('registerBtn');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const syncNowBtn = document.getElementById('syncNowBtn');
const resetPasswordBtn = document.getElementById('resetPasswordBtn');
const authStatus = document.getElementById('authStatus');
const passwordStrengthBar = document.getElementById('passwordStrengthBar');
const passwordStrengthText = document.getElementById('passwordStrengthText');
const toastContainer = document.getElementById('toastContainer');

// Bộ từ vựng “thực tế” (A1–C2). Phần còn lại sẽ được sinh tự động theo 20 chủ đề.
const baseVocabularies = [
  { level: 'A1', topic: 'Chào hỏi', word: 'Bonjour', meaning: 'Xin chào', example: 'Bonjour, comment ça va ?', difficulty: 1 },
  { level: 'A1', topic: 'Lịch sự', word: 'S’il vous plaît', meaning: 'Làm ơn', example: 'Un café, s’il vous plaît.', difficulty: 1 },
  { level: 'A1', topic: 'Lịch sự', word: 'Merci', meaning: 'Cảm ơn', example: 'Merci beaucoup !', difficulty: 1 },
  { level: 'A1', topic: 'Lịch sự', word: 'De rien', meaning: 'Không có gì', example: '— Merci ! — De rien.', difficulty: 1 },
  { level: 'A1', topic: 'Chào hỏi', word: 'Au revoir', meaning: 'Tạm biệt', example: 'Au revoir, à demain !', difficulty: 1 },
  { level: 'A1', topic: 'Chào hỏi', word: 'Comment tu t’appelles ?', meaning: 'Bạn tên gì?', example: 'Comment tu t’appelles ?', difficulty: 1 },
  { level: 'A1', topic: 'Giới thiệu', word: 'Je m’appelle…', meaning: 'Tôi tên là…', example: 'Je m’appelle Nam.', difficulty: 1 },
  { level: 'A1', topic: 'Du lịch', word: 'Où est la gare ?', meaning: 'Nhà ga ở đâu?', example: 'Excusez-moi, où est la gare ?', difficulty: 1 },
  { level: 'A1', topic: 'Ẩm thực', word: 'Je voudrais un café', meaning: 'Tôi muốn một cà phê', example: 'Je voudrais un café, s’il vous plaît.', difficulty: 1 },
  { level: 'A1', topic: 'Mua sắm', word: 'Combien ça coûte ?', meaning: 'Cái này bao nhiêu tiền?', example: 'Combien ça coûte ?', difficulty: 1 },
  { level: 'A2', topic: 'Thời gian', word: 'Aujourd’hui', meaning: 'Hôm nay', example: 'Aujourd’hui, je travaille.', difficulty: 2 },
  { level: 'A2', topic: 'Thời gian', word: 'Demain', meaning: 'Ngày mai', example: 'Je pars demain.', difficulty: 2 },
  { level: 'A2', topic: 'Nhà hàng', word: 'L’addition, s’il vous plaît', meaning: 'Cho tôi xin hóa đơn', example: 'L’addition, s’il vous plaît.', difficulty: 2 },
  { level: 'A2', topic: 'Giao thông', word: 'un billet', meaning: 'một vé', example: 'Je voudrais un billet.', difficulty: 2 },
  { level: 'A2', topic: 'Sức khỏe', word: 'J’ai mal à la tête', meaning: 'Tôi bị đau đầu', example: 'J’ai mal à la tête.', difficulty: 2 },
  { level: 'B1', topic: 'Công việc', word: 'un rendez-vous', meaning: 'một cuộc hẹn', example: 'J’ai un rendez-vous à 15h.', difficulty: 3 },
  { level: 'B1', topic: 'Công nghệ', word: 'un mot de passe', meaning: 'mật khẩu', example: 'J’ai oublié mon mot de passe.', difficulty: 3 },
  { level: 'B1', topic: 'Giao tiếp', word: 'Je suis d’accord', meaning: 'Tôi đồng ý', example: 'Oui, je suis d’accord.', difficulty: 3 },
  { level: 'B2', topic: 'Công việc', word: 'négocier', meaning: 'đàm phán', example: 'Nous devons négocier le contrat.', difficulty: 4 },
  { level: 'B2', topic: 'Ngân hàng', word: 'un virement', meaning: 'chuyển khoản', example: 'Je fais un virement bancaire.', difficulty: 4 },
  { level: 'C1', topic: 'Tranh luận', word: 'cependant', meaning: 'tuy nhiên', example: 'Cependant, je ne suis pas sûr.', difficulty: 5 },
  { level: 'C2', topic: 'Trình bày', word: 'quoi qu’il en soit', meaning: 'dù sao đi nữa', example: 'Quoi qu’il en soit, je viendrai.', difficulty: 5 }
];

function generateRealLifeVocabularies(count = 3000) {
  const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const levelDifficulty = { A1: 1, A2: 2, B1: 3, B2: 4, C1: 5, C2: 5 };
  const subjects = ['Je', 'Tu', 'Nous', 'Vous'];
  const genericTime = ['aujourd’hui', 'demain', 'ce matin', 'ce soir', 'maintenant', 'souvent'];

  const topics = [
    {
      topic: 'Chào hỏi',
      phrases: [
        { fr: 'Salut', vi: 'Chào (thân mật)', ex: 'Salut ! Tu vas bien ?' },
        { fr: 'Enchanté(e)', vi: 'Rất vui được gặp', ex: 'Enchanté(e) !' },
        { fr: 'À bientôt', vi: 'Hẹn gặp lại sớm', ex: 'À bientôt !' }
      ],
      verbs: [{ fr: 'saluer', vi: 'chào' }, { fr: 'rencontrer', vi: 'gặp' }, { fr: 'remercier', vi: 'cảm ơn' }],
      objects: [{ fr: 'quelqu’un', vi: 'ai đó' }, { fr: 'un ami', vi: 'một người bạn' }, { fr: 'un collègue', vi: 'một đồng nghiệp' }]
    },
    {
      topic: 'Lịch sự',
      phrases: [
        { fr: 'Excusez-moi', vi: 'Xin lỗi / làm phiền', ex: 'Excusez-moi, une question ?' },
        { fr: 'Je suis désolé(e)', vi: 'Tôi xin lỗi', ex: 'Je suis désolé(e) du retard.' },
        { fr: 'Pas de problème', vi: 'Không sao', ex: '— Désolé ! — Pas de problème.' }
      ],
      verbs: [{ fr: 'demander', vi: 'hỏi/yêu cầu' }, { fr: 'expliquer', vi: 'giải thích' }, { fr: 'aider', vi: 'giúp' }],
      objects: [{ fr: 'une information', vi: 'một thông tin' }, { fr: 'une adresse', vi: 'một địa chỉ' }, { fr: 'un service', vi: 'một dịch vụ' }]
    },
    {
      topic: 'Giới thiệu',
      phrases: [
        { fr: 'Je m’appelle…', vi: 'Tôi tên là…', ex: 'Je m’appelle Linh.' },
        { fr: 'J’ai … ans', vi: 'Tôi … tuổi', ex: 'J’ai 20 ans.' },
        { fr: 'Je viens de…', vi: 'Tôi đến từ…', ex: 'Je viens du Vietnam.' }
      ],
      verbs: [{ fr: 'présenter', vi: 'giới thiệu' }, { fr: 'décrire', vi: 'mô tả' }, { fr: 'parler de', vi: 'nói về' }],
      objects: [{ fr: 'moi', vi: 'bản thân tôi' }, { fr: 'mon travail', vi: 'công việc của tôi' }, { fr: 'ma ville', vi: 'thành phố của tôi' }]
    },
    {
      topic: 'Gia đình',
      phrases: [
        { fr: 'ma famille', vi: 'gia đình tôi', ex: 'Ma famille est grande.' },
        { fr: 'un enfant', vi: 'một đứa trẻ', ex: 'J’ai un enfant.' },
        { fr: 'un anniversaire', vi: 'sinh nhật', ex: 'C’est son anniversaire.' }
      ],
      verbs: [{ fr: 'appeler', vi: 'gọi' }, { fr: 'aider', vi: 'giúp' }, { fr: 'inviter', vi: 'mời' }, { fr: 'visiter', vi: 'thăm' }],
      objects: [{ fr: 'mon père', vi: 'bố tôi' }, { fr: 'ma mère', vi: 'mẹ tôi' }, { fr: 'mon frère', vi: 'anh/em trai tôi' }, { fr: 'ma sœur', vi: 'chị/em gái tôi' }]
    },
    {
      topic: 'Cảm xúc',
      phrases: [
        { fr: 'Je suis content(e)', vi: 'Tôi vui', ex: 'Je suis content(e) aujourd’hui.' },
        { fr: 'Je suis fatigué(e)', vi: 'Tôi mệt', ex: 'Je suis fatigué(e) ce soir.' },
        { fr: 'Je suis stressé(e)', vi: 'Tôi căng thẳng', ex: 'Je suis stressé(e) en ce moment.' }
      ],
      verbs: [{ fr: 'aimer', vi: 'thích/yêu' }, { fr: 'détester', vi: 'ghét' }, { fr: 'espérer', vi: 'hy vọng' }, { fr: 's’inquiéter', vi: 'lo lắng' }],
      objects: [{ fr: 'ça', vi: 'điều đó' }, { fr: 'ce film', vi: 'bộ phim này' }, { fr: 'ce travail', vi: 'công việc này' }, { fr: 'cette idée', vi: 'ý tưởng này' }]
    },
    {
      topic: 'Thời gian',
      phrases: [
        { fr: 'à quelle heure ?', vi: 'mấy giờ?', ex: 'À quelle heure on se voit ?' },
        { fr: 'tout de suite', vi: 'ngay lập tức', ex: 'Je reviens tout de suite.' },
        { fr: 'en retard', vi: 'trễ', ex: 'Je suis en retard.' }
      ],
      verbs: [{ fr: 'commencer', vi: 'bắt đầu' }, { fr: 'finir', vi: 'kết thúc' }, { fr: 'attendre', vi: 'chờ' }, { fr: 'planifier', vi: 'lên kế hoạch' }],
      objects: [{ fr: 'un rendez-vous', vi: 'một cuộc hẹn' }, { fr: 'une réunion', vi: 'một cuộc họp' }, { fr: 'un horaire', vi: 'lịch trình' }, { fr: 'un programme', vi: 'chương trình' }]
    },
    {
      topic: 'Du lịch',
      phrases: [
        { fr: 'un passeport', vi: 'hộ chiếu', ex: 'J’ai mon passeport.' },
        { fr: 'une réservation', vi: 'một đặt chỗ', ex: 'J’ai une réservation.' },
        { fr: 'un hôtel', vi: 'một khách sạn', ex: 'Je cherche un hôtel.' }
      ],
      verbs: [{ fr: 'réserver', vi: 'đặt' }, { fr: 'acheter', vi: 'mua' }, { fr: 'visiter', vi: 'tham quan' }, { fr: 'chercher', vi: 'tìm' }, { fr: 'annuler', vi: 'hủy' }],
      objects: [{ fr: 'un billet', vi: 'một vé' }, { fr: 'un musée', vi: 'một bảo tàng' }, { fr: 'un plan', vi: 'bản đồ' }, { fr: 'une valise', vi: 'một vali' }, { fr: 'un visa', vi: 'một thị thực' }]
    },
    {
      topic: 'Giao thông',
      phrases: [
        { fr: 'la station', vi: 'trạm/ga', ex: 'La station est là-bas.' },
        { fr: 'un taxi', vi: 'một taxi', ex: 'Je prends un taxi.' },
        { fr: 'un ticket', vi: 'một vé', ex: 'Où acheter un ticket ?' }
      ],
      verbs: [{ fr: 'prendre', vi: 'đi/đón (phương tiện)' }, { fr: 'changer', vi: 'đổi' }, { fr: 'descendre', vi: 'xuống' }, { fr: 'monter', vi: 'lên' }, { fr: 'payer', vi: 'trả tiền' }],
      objects: [{ fr: 'le métro', vi: 'tàu điện ngầm' }, { fr: 'le bus', vi: 'xe buýt' }, { fr: 'un train', vi: 'một chuyến tàu' }, { fr: 'un vélo', vi: 'một xe đạp' }, { fr: 'un itinéraire', vi: 'lộ trình' }]
    },
    {
      topic: 'Nhà ở',
      phrases: [
        { fr: 'un appartement', vi: 'một căn hộ', ex: 'Je cherche un appartement.' },
        { fr: 'un loyer', vi: 'tiền thuê nhà', ex: 'Le loyer est cher.' },
        { fr: 'une chambre', vi: 'một phòng', ex: 'Ma chambre est petite.' }
      ],
      verbs: [{ fr: 'louer', vi: 'thuê' }, { fr: 'nettoyer', vi: 'dọn dẹp' }, { fr: 'réparer', vi: 'sửa' }, { fr: 'installer', vi: 'lắp đặt' }, { fr: 'ouvrir', vi: 'mở' }],
      objects: [{ fr: 'une porte', vi: 'một cái cửa' }, { fr: 'une fenêtre', vi: 'một cửa sổ' }, { fr: 'une cuisine', vi: 'một căn bếp' }, { fr: 'une salle de bain', vi: 'phòng tắm' }, { fr: 'une clé', vi: 'một chiếc chìa khóa' }]
    },
    {
      topic: 'Công việc',
      phrases: [
        { fr: 'un e-mail', vi: 'một email', ex: 'Je t’envoie un e-mail.' },
        { fr: 'un contrat', vi: 'một hợp đồng', ex: 'Je signe un contrat.' },
        { fr: 'une réunion', vi: 'một cuộc họp', ex: 'Nous avons une réunion.' }
      ],
      verbs: [{ fr: 'travailler', vi: 'làm việc' }, { fr: 'envoyer', vi: 'gửi' }, { fr: 'recevoir', vi: 'nhận' }, { fr: 'organiser', vi: 'tổ chức' }, { fr: 'présenter', vi: 'trình bày' }],
      objects: [{ fr: 'un projet', vi: 'một dự án' }, { fr: 'un rapport', vi: 'một báo cáo' }, { fr: 'un fichier', vi: 'một tệp' }, { fr: 'un client', vi: 'một khách hàng' }, { fr: 'un délai', vi: 'một thời hạn' }]
    },
    {
      topic: 'Học tập',
      phrases: [
        { fr: 'un devoir', vi: 'bài tập về nhà', ex: 'J’ai un devoir à faire.' },
        { fr: 'un examen', vi: 'một kỳ thi', ex: 'J’ai un examen demain.' },
        { fr: 'une leçon', vi: 'một bài học', ex: 'Je révise une leçon.' }
      ],
      verbs: [{ fr: 'apprendre', vi: 'học' }, { fr: 'réviser', vi: 'ôn tập' }, { fr: 'comprendre', vi: 'hiểu' }, { fr: 'pratiquer', vi: 'luyện tập' }, { fr: 'répéter', vi: 'lặp lại' }],
      objects: [{ fr: 'un mot', vi: 'một từ' }, { fr: 'une phrase', vi: 'một câu' }, { fr: 'la grammaire', vi: 'ngữ pháp' }, { fr: 'la prononciation', vi: 'phát âm' }, { fr: 'le vocabulaire', vi: 'từ vựng' }]
    },
    {
      topic: 'Sức khỏe',
      phrases: [
        { fr: 'une pharmacie', vi: 'nhà thuốc', ex: 'Où est la pharmacie ?' },
        { fr: 'un médecin', vi: 'bác sĩ', ex: 'Je dois voir un médecin.' },
        { fr: 'un médicament', vi: 'thuốc', ex: 'Je prends un médicament.' }
      ],
      verbs: [{ fr: 'se reposer', vi: 'nghỉ ngơi' }, { fr: 'prendre', vi: 'uống/dùng' }, { fr: 'consulter', vi: 'khám' }, { fr: 'respirer', vi: 'thở' }, { fr: 'guérir', vi: 'khỏi bệnh' }],
      objects: [{ fr: 'un rhume', vi: 'cảm lạnh' }, { fr: 'de la fièvre', vi: 'sốt' }, { fr: 'une douleur', vi: 'cơn đau' }, { fr: 'un pansement', vi: 'băng cá nhân' }, { fr: 'un rendez-vous', vi: 'cuộc hẹn' }]
    },
    {
      topic: 'Ẩm thực',
      phrases: [
        { fr: 'un menu', vi: 'thực đơn', ex: 'Puis-je voir le menu ?' },
        { fr: 'un dessert', vi: 'món tráng miệng', ex: 'Je prends un dessert.' },
        { fr: 'de l’eau', vi: 'nước', ex: 'Je voudrais de l’eau.' }
      ],
      verbs: [{ fr: 'manger', vi: 'ăn' }, { fr: 'boire', vi: 'uống' }, { fr: 'commander', vi: 'gọi món/đặt' }, { fr: 'goûter', vi: 'nếm/thử' }, { fr: 'préparer', vi: 'chuẩn bị' }],
      objects: [{ fr: 'un café', vi: 'một cà phê' }, { fr: 'un croissant', vi: 'một bánh sừng bò' }, { fr: 'du pain', vi: 'bánh mì' }, { fr: 'une salade', vi: 'một salad' }, { fr: 'une soupe', vi: 'một súp' }]
    },
    {
      topic: 'Mua sắm',
      phrases: [
        { fr: 'une réduction', vi: 'giảm giá', ex: 'Il y a une réduction ?' },
        { fr: 'la taille', vi: 'kích cỡ', ex: 'Quelle est la taille ?' },
        { fr: 'une caisse', vi: 'quầy tính tiền', ex: 'La caisse est là-bas.' }
      ],
      verbs: [{ fr: 'acheter', vi: 'mua' }, { fr: 'payer', vi: 'trả tiền' }, { fr: 'choisir', vi: 'chọn' }, { fr: 'essayer', vi: 'thử' }, { fr: 'retourner', vi: 'đổi/trả' }],
      objects: [{ fr: 'un vêtement', vi: 'một bộ quần áo' }, { fr: 'un cadeau', vi: 'một món quà' }, { fr: 'un prix', vi: 'một mức giá' }, { fr: 'une carte bancaire', vi: 'thẻ ngân hàng' }, { fr: 'un ticket de caisse', vi: 'hóa đơn' }]
    },
    {
      topic: 'Công nghệ',
      phrases: [
        { fr: 'un téléphone', vi: 'điện thoại', ex: 'Mon téléphone est en panne.' },
        { fr: 'un mot de passe', vi: 'mật khẩu', ex: 'J’ai oublié mon mot de passe.' },
        { fr: 'le Wi‑Fi', vi: 'Wi‑Fi', ex: 'Le Wi‑Fi ne marche pas.' }
      ],
      verbs: [{ fr: 'installer', vi: 'cài đặt' }, { fr: 'mettre à jour', vi: 'cập nhật' }, { fr: 'télécharger', vi: 'tải xuống' }, { fr: 'connecter', vi: 'kết nối' }, { fr: 'réinitialiser', vi: 'đặt lại' }],
      objects: [{ fr: 'une application', vi: 'một ứng dụng' }, { fr: 'un compte', vi: 'một tài khoản' }, { fr: 'un fichier', vi: 'một tệp' }, { fr: 'un ordinateur', vi: 'máy tính' }, { fr: 'un écran', vi: 'màn hình' }]
    },
    {
      topic: 'Giải trí',
      phrases: [
        { fr: 'un film', vi: 'một bộ phim', ex: 'On regarde un film ?' },
        { fr: 'un concert', vi: 'một buổi hòa nhạc', ex: 'Je vais à un concert.' },
        { fr: 'un sport', vi: 'một môn thể thao', ex: 'Je fais du sport.' }
      ],
      verbs: [{ fr: 'regarder', vi: 'xem' }, { fr: 'écouter', vi: 'nghe' }, { fr: 'jouer', vi: 'chơi' }, { fr: 'sortir', vi: 'đi chơi' }, { fr: 'visiter', vi: 'tham quan' }],
      objects: [{ fr: 'un musée', vi: 'một bảo tàng' }, { fr: 'un match', vi: 'một trận đấu' }, { fr: 'une chanson', vi: 'một bài hát' }, { fr: 'un jeu', vi: 'một trò chơi' }, { fr: 'un livre', vi: 'một quyển sách' }]
    },
    {
      topic: 'Thời tiết',
      phrases: [
        { fr: 'il fait beau', vi: 'trời đẹp', ex: 'Aujourd’hui, il fait beau.' },
        { fr: 'il pleut', vi: 'trời mưa', ex: 'Il pleut ce matin.' },
        { fr: 'il fait froid', vi: 'trời lạnh', ex: 'Il fait froid en hiver.' }
      ],
      verbs: [{ fr: 'faire', vi: 'làm/đang (thời tiết)' }, { fr: 'pleuvoir', vi: 'mưa' }, { fr: 'neiger', vi: 'tuyết rơi' }],
      objects: [{ fr: 'chaud', vi: 'nóng' }, { fr: 'froid', vi: 'lạnh' }, { fr: 'du vent', vi: 'gió' }, { fr: 'du soleil', vi: 'nắng' }, { fr: 'des nuages', vi: 'mây' }]
    },
    {
      topic: 'Nhà hàng',
      phrases: [
        { fr: 'une table pour deux', vi: 'một bàn cho hai người', ex: 'Une table pour deux, s’il vous plaît.' },
        { fr: 'sans gluten', vi: 'không gluten', ex: 'C’est sans gluten ?' },
        { fr: 'Je suis allergique', vi: 'Tôi bị dị ứng', ex: 'Je suis allergique aux noix.' }
      ],
      verbs: [{ fr: 'réserver', vi: 'đặt' }, { fr: 'commander', vi: 'gọi món' }, { fr: 'demander', vi: 'yêu cầu' }, { fr: 'payer', vi: 'trả tiền' }, { fr: 'goûter', vi: 'thử' }],
      objects: [{ fr: 'une table', vi: 'một cái bàn' }, { fr: 'un plat', vi: 'một món' }, { fr: 'un menu', vi: 'thực đơn' }, { fr: 'l’addition', vi: 'hóa đơn' }, { fr: 'une réservation', vi: 'đặt chỗ' }]
    },
    {
      topic: 'Ngân hàng',
      phrases: [
        { fr: 'une carte', vi: 'một thẻ', ex: 'Je veux une carte bancaire.' },
        { fr: 'un retrait', vi: 'rút tiền', ex: 'Je fais un retrait.' },
        { fr: 'un code', vi: 'mã PIN', ex: 'J’ai oublié mon code.' }
      ],
      verbs: [{ fr: 'retirer', vi: 'rút' }, { fr: 'déposer', vi: 'gửi/nộp' }, { fr: 'payer', vi: 'trả' }, { fr: 'transférer', vi: 'chuyển' }, { fr: 'bloquer', vi: 'khóa' }],
      objects: [{ fr: 'de l’argent', vi: 'tiền' }, { fr: 'un compte', vi: 'tài khoản' }, { fr: 'un virement', vi: 'chuyển khoản' }, { fr: 'une carte bancaire', vi: 'thẻ ngân hàng' }, { fr: 'un reçu', vi: 'biên lai' }]
    },
    {
      topic: 'Dịch vụ',
      phrases: [
        { fr: 'un colis', vi: 'một bưu kiện', ex: 'J’envoie un colis.' },
        { fr: 'une réparation', vi: 'một lần sửa chữa', ex: 'Je demande une réparation.' },
        { fr: 'un formulaire', vi: 'một biểu mẫu', ex: 'Je remplis un formulaire.' }
      ],
      verbs: [{ fr: 'envoyer', vi: 'gửi' }, { fr: 'recevoir', vi: 'nhận' }, { fr: 'remplir', vi: 'điền' }, { fr: 'réparer', vi: 'sửa' }, { fr: 'payer', vi: 'trả' }],
      objects: [{ fr: 'un colis', vi: 'một bưu kiện' }, { fr: 'un document', vi: 'một tài liệu' }, { fr: 'une facture', vi: 'một hóa đơn' }, { fr: 'un ticket', vi: 'một phiếu/vé' }, { fr: 'une demande', vi: 'một yêu cầu' }]
    },
    {
      topic: 'Khẩn cấp',
      phrases: [
        { fr: 'Au secours !', vi: 'Cứu với!', ex: 'Au secours !' },
        { fr: 'Appelez la police', vi: 'Gọi cảnh sát', ex: 'Appelez la police !' },
        { fr: 'J’ai besoin d’aide', vi: 'Tôi cần giúp đỡ', ex: 'J’ai besoin d’aide.' }
      ],
      verbs: [{ fr: 'appeler', vi: 'gọi' }, { fr: 'signaler', vi: 'báo' }, { fr: 'chercher', vi: 'tìm' }, { fr: 'aider', vi: 'giúp' }, { fr: 'protéger', vi: 'bảo vệ' }],
      objects: [{ fr: 'une ambulance', vi: 'xe cứu thương' }, { fr: 'la police', vi: 'cảnh sát' }, { fr: 'un problème', vi: 'một vấn đề' }, { fr: 'mon téléphone', vi: 'điện thoại của tôi' }, { fr: 'mes papiers', vi: 'giấy tờ của tôi' }]
    }
  ];

  const results = [];
  const seen = new Set();
  let cursor = 0;

  function pushUnique(entry) {
    const key = `${entry.level}|${entry.topic}|${entry.word}`.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    results.push(entry);
    return true;
  }

  function pick(arr, index) {
    return arr[index % arr.length];
  }

  while (results.length < count) {
    const level = levels[cursor % levels.length];
    const difficulty = levelDifficulty[level] || 3;
    const topicDef = topics[cursor % topics.length];
    const subject = subjects[cursor % subjects.length];
    const time = genericTime[cursor % genericTime.length];

    // 1) phrases cố định
    const phrase = topicDef.phrases && topicDef.phrases.length ? pick(topicDef.phrases, cursor) : null;
    if (phrase) {
      pushUnique({
        level,
        topic: topicDef.topic,
        word: phrase.fr,
        meaning: phrase.vi,
        example: phrase.ex,
        difficulty
      });
    }

    // 2) object từ vựng đơn
    if (topicDef.objects && topicDef.objects.length) {
      const obj = pick(topicDef.objects, cursor);
      pushUnique({
        level,
        topic: topicDef.topic,
        word: obj.fr,
        meaning: obj.vi,
        example: `Voici ${obj.fr}.`,
        difficulty
      });
    }

    // 3) cụm “động từ + bổ ngữ” theo đúng topic
    if (topicDef.verbs && topicDef.objects && topicDef.verbs.length && topicDef.objects.length) {
      const verb = pick(topicDef.verbs, cursor);
      const obj = pick(topicDef.objects, Math.floor(cursor / 2));
      const withTime = cursor % 3 === 0;
      const phraseWord = `${verb.fr} ${obj.fr}${withTime ? ` ${time}` : ''}`;
      pushUnique({
        level,
        topic: topicDef.topic,
        word: phraseWord,
        meaning: `${verb.vi} ${obj.vi}${withTime ? ` (${time})` : ''}`,
        example: `${subject} ${verb.fr} ${obj.fr}${withTime ? ` ${time}` : ''}.`,
        difficulty
      });
    }

    cursor += 1;
    if (cursor > 200000) break;
  }

  return results.slice(0, count);
}

const vocabularies = [...baseVocabularies, ...generateRealLifeVocabularies(3000)];

const grammarLessons = [
  // A1 – nền tảng
  {
    id: 'articles',
    title: 'Mạo từ (Les articles)',
    summary: 'Phân biệt mạo từ xác định và không xác định.',
    details: 'Xác định: le/la/les. Không xác định: un/une/des. Dùng mạo từ đúng giúp câu tự nhiên như người bản xứ.',
    example: 'Je veux un café. / La maison est grande.'
  },
  {
    id: 'etre',
    title: 'Động từ “être”',
    summary: '“Être” = “là/ở”. Động từ bất quy tắc quan trọng.',
    details: 'Hiện tại: je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont.',
    example: 'Je suis étudiant. / Nous sommes à Paris.'
  },
  {
    id: 'avoir',
    title: 'Động từ “avoir”',
    summary: '“Avoir” = “có”. Dùng phổ biến và là trợ động từ.',
    details: 'Hiện tại: j’ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont.',
    example: 'J’ai 20 ans. / Tu as un livre ?'
  },
  {
    id: 'subject-pronouns',
    title: 'Đại từ nhân xưng (chủ ngữ)',
    summary: 'Je, tu, il/elle/on, nous, vous, ils/elles.',
    details: '“On” thường dùng thay “nous” trong khẩu ngữ. “Vous” vừa là số nhiều vừa là lịch sự.',
    example: 'On va au cinéma ? / Vous êtes prêt(e) ?'
  },
  {
    id: 'present-er',
    title: 'Hiện tại của động từ -er',
    summary: 'Nhóm động từ phổ biến nhất.',
    details: 'Bỏ -er, thêm: -e, -es, -e, -ons, -ez, -ent.',
    example: 'parler → je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent.'
  },
  {
    id: 'present-ir',
    title: 'Hiện tại của động từ -ir (type finir)',
    summary: 'Một nhóm -ir thông dụng có “-iss-” ở nous/vous/ils.',
    details: 'Bỏ -ir, thêm: -is, -is, -it, -issons, -issez, -issent.',
    example: 'finir → je finis, nous finissons, ils finissent.'
  },
  {
    id: 'present-re',
    title: 'Hiện tại của động từ -re (type vendre)',
    summary: 'Nhóm -re thường gặp trong A1–A2.',
    details: 'Bỏ -re, thêm: -s, -s, (rien), -ons, -ez, -ent.',
    example: 'vendre → je vends, tu vends, il vend, nous vendons, vous vendez, ils vendent.'
  },
  {
    id: 'present-ir2',
    title: 'Một số -ir bất quy tắc (type partir)',
    summary: 'Không theo “-iss-” như finir.',
    details: 'Ví dụ partir: je pars, tu pars, il part, nous partons, vous partez, ils partent.',
    example: 'Je pars maintenant. / Nous partons demain.'
  },
  {
    id: 'negation',
    title: 'Phủ định (ne…pas)',
    summary: 'Phủ định cơ bản nhất.',
    details: 'Đặt “ne” trước động từ và “pas” sau động từ. Khẩu ngữ đôi khi lược “ne”.',
    example: 'Je ne parle pas anglais. / J’aime pas ça. (khẩu ngữ)'
  },
  {
    id: 'negation-advanced',
    title: 'Phủ định mở rộng (jamais/rien/plus/personne)',
    summary: 'Các từ phủ định thường gặp.',
    details: 'ne…jamais (không bao giờ), ne…rien (không gì), ne…plus (không còn), ne…personne (không ai).',
    example: 'Je ne veux plus de café. / Je n’ai rien compris.'
  },
  {
    id: 'questions',
    title: 'Câu hỏi cơ bản',
    summary: '3 cách hỏi thông dụng.',
    details: '1) Lên giọng: Tu viens ? 2) Est-ce que: Est-ce que tu viens ? 3) Đảo ngữ: Viens-tu ?',
    example: 'Est-ce que vous avez réservé ?'
  },
  {
    id: 'question-words',
    title: 'Từ để hỏi (qui/que/quoi/où/quand/comment/pourquoi/combien)',
    summary: 'Bộ từ hỏi cốt lõi.',
    details: 'Kết hợp với “est-ce que” hoặc đặt đầu câu. “Qu’est-ce que … ?” = “cái gì…?”.',
    example: 'Où est la gare ? / Qu’est-ce que tu fais ?'
  },
  {
    id: 'adjectives',
    title: 'Tính từ & hòa hợp giống/số',
    summary: 'Tính từ thường đổi theo danh từ.',
    details: 'Thường: giống cái +e, số nhiều +s (có ngoại lệ). Một số tính từ đứng trước danh từ (beau, grand, petit…).',
    example: 'un livre intéressant / une idée intéressante / des idées intéressantes'
  },
  {
    id: 'adjectives-position',
    title: 'Vị trí tính từ (trước/sau danh từ)',
    summary: 'Không phải tính từ nào cũng đứng sau.',
    details: 'Nhóm hay đứng trước: beau, bon, grand, gros, jeune, joli, mauvais, nouveau, petit, vieux… (BBAGG+).',
    example: 'une jolie maison / une maison moderne'
  },
  {
    id: 'comparatives',
    title: 'So sánh hơn (plus/moins/aussi … que)',
    summary: 'So sánh tính từ/trạng từ/danh từ.',
    details: 'tính từ: plus grand que…; trạng từ: plus vite que…; danh từ: plus de … que / moins de … que.',
    example: 'Il est plus grand que moi. / Je travaille plus que toi.'
  },
  {
    id: 'superlatives',
    title: 'So sánh nhất (le/la/les plus…)',
    summary: '“Nhất” dùng với mạo từ xác định.',
    details: 'le plus + adj; la plus + adj; les plus + adj.',
    example: 'C’est le meilleur restaurant de la ville.'
  },
  {
    id: 'possessive',
    title: 'Tính từ sở hữu (mon/ma/mes…)',
    summary: 'Diễn tả “của tôi/của bạn/…”',
    details: 'Chọn theo giống/số của danh từ sở hữu (không theo người sở hữu). “ma + âm đầu nguyên âm” → “mon amie”.',
    example: 'mon frère / ma sœur / mes amis'
  },
  {
    id: 'demonstratives',
    title: 'Tính từ chỉ định (ce/cet/cette/ces)',
    summary: 'Diễn tả “này/đó”.',
    details: 'ce (đực), cet (đực + nguyên âm), cette (cái), ces (số nhiều).',
    example: 'ce livre / cet homme / cette table / ces enfants'
  },
  {
    id: 'articles-contraction',
    title: 'Co rút mạo từ + giới từ (à/de + le/les)',
    summary: 'Quy tắc bắt buộc.',
    details: 'à + le = au; à + les = aux; de + le = du; de + les = des.',
    example: 'Je vais au marché. / Je reviens des États-Unis.'
  },
  {
    id: 'prepositions-place',
    title: 'Giới từ nơi chốn (à/chez/dans/sur…)',
    summary: 'Các giới từ cơ bản.',
    details: 'à = ở/đến; chez = nhà/tiệm của ai; dans = trong; sur = trên; sous = dưới; devant/derrière = trước/sau.',
    example: 'Je suis chez moi. / Le livre est sur la table.'
  },
  {
    id: 'countries-preps',
    title: 'Giới từ với quốc gia/thành phố (à/en/au/aux)',
    summary: 'Quy tắc theo giống của quốc gia.',
    details: 'Thành phố: à Paris. Quốc gia: en + giống cái (en France), au + giống đực (au Canada), aux + số nhiều (aux États-Unis).',
    example: 'Je vais en France. / Il habite au Japon.'
  },
  {
    id: 'time-expressions',
    title: 'Thời gian cơ bản (en/pendant/il y a/depuis)',
    summary: '4 cấu trúc rất hay gặp.',
    details: 'en + tháng/năm; pendant + khoảng thời gian; il y a + mốc thời gian (… trước); depuis + mốc bắt đầu (từ…).',
    example: 'J’étudie le français depuis 2024. / Je suis arrivé il y a deux jours.'
  },
  {
    id: 'partitive',
    title: 'Mạo từ bộ phận (du/de la/des)',
    summary: 'Nói “một ít/một phần”.',
    details: 'du (đực), de la (cái), des (số nhiều). Khi phủ định thường chuyển thành de/d’.',
    example: 'Je veux du pain. / Je ne veux pas de sucre.'
  },
  {
    id: 'imperative',
    title: 'Mệnh lệnh (Impératif)',
    summary: 'Ra lệnh/đề nghị.',
    details: 'Dạng thường dùng: tu/nous/vous. Với “-er”, dạng tu bỏ -s: Parle ! (nhưng: Parles-en !).',
    example: 'Venez ici ! / Allons-y ! / Parle plus lentement.'
  },
  {
    id: 'reflexive',
    title: 'Động từ phản thân (se lever, s’appeler…) ',
    summary: 'Diễn tả hành động hướng về bản thân.',
    details: 'Đại từ: me/te/se/nous/vous/se + động từ. Quá khứ dùng “être” và hòa hợp (thường).',
    example: 'Je m’appelle Nam. / Elle s’est levée tôt.'
  },
  {
    id: 'pronouns-stressed',
    title: 'Đại từ nhấn mạnh (moi/toi/lui/elle/nous/vous/eux/elles)',
    summary: 'Dùng để nhấn mạnh hoặc sau giới từ.',
    details: 'Sau giới từ: avec moi, pour lui…; dùng trong cấu trúc “c’est …”.',
    example: 'C’est pour toi. / Avec eux, c’est facile.'
  },
  {
    id: 'passe-compose',
    title: 'Quá khứ (Passé composé)',
    summary: 'Diễn tả hành động đã xảy ra và hoàn tất.',
    details: 'Trợ động từ avoir/être + participe passé. Thường: đa số dùng avoir; một nhóm dùng être (aller/venir/entrer/sortir/arriver/partir/naître/mourir/monter/descendre/rester/tomber…).',
    example: 'J’ai étudié hier. / Elle est allée au marché.'
  },
  {
    id: 'past-participle-agreement',
    title: 'Hòa hợp quá khứ phân từ (accord du participe passé)',
    summary: 'Quy tắc quan trọng từ A2–B1.',
    details: 'Với être: hòa hợp với chủ ngữ. Với avoir: chỉ hòa hợp khi tân ngữ trực tiếp đứng trước (les pommes que j’ai mangées…).',
    example: 'Elle est arrivée. / Les lettres que j’ai écrites.'
  },
  {
    id: 'imparfait',
    title: 'Quá khứ tiếp diễn (Imparfait)',
    summary: 'Mô tả bối cảnh, thói quen trong quá khứ.',
    details: 'Lấy gốc “nous” hiện tại bỏ -ons rồi thêm: -ais, -ais, -ait, -ions, -iez, -aient. Ngoại lệ: être → ét-.',
    example: 'Quand j’étais petit, je jouais dehors.'
  },
  {
    id: 'passe-compose-vs-imparfait',
    title: 'So sánh Passé composé vs Imparfait',
    summary: 'Chọn đúng thì giúp câu “đúng cảm giác”.',
    details: 'Imparfait = bối cảnh/đang diễn ra; Passé composé = hành động điểm/đột ngột/hoàn tất.',
    example: 'Je lisais quand il a téléphoné.'
  },
  {
    id: 'plus-que-parfait',
    title: 'Quá khứ trước quá khứ (Plus-que-parfait)',
    summary: 'Hành động xảy ra trước một mốc quá khứ khác.',
    details: 'Imparfait của avoir/être + participe passé.',
    example: 'J’avais déjà mangé quand il est arrivé.'
  },
  {
    id: 'futur-proche',
    title: 'Tương lai gần (Futur proche)',
    summary: 'Việc sắp xảy ra.',
    details: 'aller (hiện tại) + động từ nguyên mẫu.',
    example: 'Je vais partir demain.'
  },
  {
    id: 'futur-simple',
    title: 'Tương lai đơn (Futur simple)',
    summary: 'Nói dự định/tiên đoán tương lai.',
    details: 'Thêm đuôi: -ai, -as, -a, -ons, -ez, -ont vào gốc tương lai (thường là infinitif; có bất quy tắc: être/avoir/aller/faire/venir/pouvoir/vouloir/devoir…).',
    example: 'Demain, je travaillerai. / Il fera beau.'
  },
  {
    id: 'conditionnel-present',
    title: 'Điều kiện hiện tại (Conditionnel présent)',
    summary: 'Lịch sự, giả định, mong muốn.',
    details: 'Gốc futur + đuôi imparfait (-ais, -ais, -ait, -ions, -iez, -aient).',
    example: 'Je voudrais un café, s’il vous plaît.'
  },
  {
    id: 'si-clauses',
    title: 'Câu điều kiện với “si”',
    summary: '3 mẫu phổ biến.',
    details: '1) si + présent → futur/impératif. 2) si + imparfait → conditionnel. 3) si + plus-que-parfait → conditionnel passé.',
    example: 'Si tu viens, on ira au cinéma. / Si j’avais le temps, je voyagerais.'
  },
  {
    id: 'object-pronouns-direct',
    title: 'Đại từ tân ngữ trực tiếp (me/te/le/la/nous/vous/les)',
    summary: 'Thay thế “ai/cái gì” trực tiếp sau động từ.',
    details: 'Đặt trước động từ chia. le/la rút gọn thành l’ trước nguyên âm.',
    example: 'Je vois Marie → Je la vois. / Je prends le livre → Je le prends.'
  },
  {
    id: 'object-pronouns-indirect',
    title: 'Đại từ tân ngữ gián tiếp (lui/leur)',
    summary: 'Thay thế “cho ai” (à + người).',
    details: 'lui = cho anh ấy/cô ấy; leur = cho họ.',
    example: 'Je parle à Paul → Je lui parle. / Je donne un cadeau à mes parents → Je leur donne un cadeau.'
  },
  {
    id: 'pronoun-order',
    title: 'Thứ tự đại từ trước động từ',
    summary: 'Thứ tự cố định khi có nhiều đại từ.',
    details: 'me/te/se/nous/vous → le/la/les → lui/leur → y → en.',
    example: 'Je le lui donne. / J’en parle. / J’y vais.'
  },
  {
    id: 'y-pronoun',
    title: 'Đại từ “y”',
    summary: 'Thay thế “à + nơi chốn/điều gì”.',
    details: 'y thay cho “à Paris/à la maison/à ça…”.',
    example: 'Tu vas à Paris ? Oui, j’y vais.'
  },
  {
    id: 'en-pronoun',
    title: 'Đại từ “en”',
    summary: 'Thay thế “de + danh từ/đồ vật/số lượng”.',
    details: 'en thường dùng với “du/de la/des”, “de + …”, số lượng: j’en ai deux.',
    example: 'Tu veux du pain ? Oui, j’en veux.'
  },
  {
    id: 'relative-qui-que',
    title: 'Đại từ quan hệ: qui / que',
    summary: 'Nối 2 câu lại.',
    details: 'qui = chủ ngữ trong mệnh đề quan hệ; que = tân ngữ trực tiếp.',
    example: 'La femme qui parle… / Le livre que j’achète…'
  },
  {
    id: 'relative-dont-ou',
    title: 'Đại từ quan hệ: dont / où',
    summary: 'Mở rộng cho B1.',
    details: 'dont thay cho “de + …”; où dùng cho nơi chốn/thời gian.',
    example: 'La personne dont je parle… / La ville où je vis…'
  },
  {
    id: 'adverbs',
    title: 'Trạng từ (adverbes) & vị trí',
    summary: 'Nói cách thức/thời gian/tần suất.',
    details: 'Trạng từ thường đứng sau động từ hoặc cuối câu; với passé composé thường đứng giữa avoir/être và participe passé (souvent).',
    example: 'Je travaille souvent. / J’ai souvent mangé ici.'
  },
  {
    id: 'frequency',
    title: 'Tần suất (toujours/souvent/parfois/rarement/jamais)',
    summary: 'Các từ tần suất hay dùng.',
    details: 'Thường đứng sau chủ ngữ hoặc sau trợ động từ.',
    example: 'Je ne mange jamais ça.'
  },
  {
    id: 'quantity',
    title: 'Số lượng (beaucoup de/peu de/assez de/trop de)',
    summary: 'Cụm chỉ lượng đi với “de”.',
    details: 'Sau beaucoup/peu/assez/trop thường là “de/d’” (không dùng des).',
    example: 'J’ai beaucoup de travail.'
  },

  // B1 – mở rộng cấu trúc
  {
    id: 'gerund',
    title: 'Gérondif (en + participe présent)',
    summary: 'Diễn tả “trong khi / bằng cách”.',
    details: 'en + V-ant (nous-form bỏ -ons + ant). Dùng để diễn tả hành động song song hoặc cách thức.',
    example: 'J’apprends en écoutant des podcasts.'
  },
  {
    id: 'present-participle',
    title: 'Participe présent (-ant)',
    summary: 'Dùng như tính từ/trạng từ trong một số cấu trúc.',
    details: 'Giống gérondif nhưng không có “en”. Có thể bổ nghĩa danh từ.',
    example: 'Une fille souriant. (văn viết)'
  },
  {
    id: 'passive-voice',
    title: 'Câu bị động (voix passive)',
    summary: 'Tập trung vào đối tượng bị tác động.',
    details: 'être + participe passé (+ par). Participe passé hòa hợp theo chủ ngữ bị động.',
    example: 'Le livre est écrit par Victor Hugo.'
  },
  {
    id: 'indirect-speech',
    title: 'Câu gián tiếp (discours indirect)',
    summary: 'Tường thuật lời nói.',
    details: 'Dire/penser/demander + que/si. Khi lùi thì (tùy bối cảnh) có thể đổi temps/repères.',
    example: 'Il dit qu’il vient. / Elle demande si tu es libre.'
  },
  {
    id: 'subjunctive-intro',
    title: 'Subjonctif (giới thiệu)',
    summary: 'Thì dùng sau cảm xúc/ý muốn/đánh giá.',
    details: 'Sau: il faut que…, je veux que…, je suis content que…, bien que…, pour que… (mức B1–B2).',
    example: 'Il faut que tu viennes. / Je veux que vous soyez là.'
  },
  {
    id: 'subjunctive-forms',
    title: 'Subjonctif (chia cơ bản)',
    summary: 'Cách chia với động từ thường và bất quy tắc.',
    details: 'Lấy gốc “ils” hiện tại bỏ -ent rồi thêm: -e, -es, -e, -ions, -iez, -ent. Bất quy tắc hay gặp: être (sois/soit…), avoir (aie/ait…), aller (aille…), faire (fasse…), pouvoir (puisse…), venir (vienne…).',
    example: 'Il faut que je fasse attention.'
  },
  {
    id: 'subjunctive-vs-indicative',
    title: 'Subjonctif vs Indicatif',
    summary: 'Khi nào dùng cái nào.',
    details: 'Sự chắc chắn/sự thật → indicatif; mong muốn/cảm xúc/nghi ngờ → subjonctif.',
    example: 'Je pense qu’il est là. / Je ne pense pas qu’il soit là.'
  },
  {
    id: 'relative-which',
    title: 'Đại từ quan hệ: lequel/laquelle/lesquels/lesquelles',
    summary: 'Dùng sau giới từ (avec, dans, sur…).',
    details: 'lequel biến đổi theo giống/số và kết hợp với à/de: auquel/auxquels/duquel…',
    example: 'La table sur laquelle je travaille…'
  },
  {
    id: 'cause-consequence',
    title: 'Nguyên nhân – kết quả (parce que/car/donc/ainsi)',
    summary: 'Liên từ và trạng từ liên kết.',
    details: 'parce que (vì), car (vì – văn viết), donc (vì vậy), ainsi (do đó), puisque (vì – ai cũng biết).',
    example: 'Je suis fatigué, donc je me repose.'
  },
  {
    id: 'concession',
    title: 'Nhượng bộ (mais/cependant/bien que/même si)',
    summary: 'Diễn tả “mặc dù”.',
    details: 'bien que + subjonctif; même si + indicatif.',
    example: 'Bien qu’il pleuve, on sort. / Même s’il pleut, on sort.'
  },
  {
    id: 'infinitive-constructions',
    title: 'Cấu trúc với động từ nguyên mẫu',
    summary: 'Muốn/định/biết cách…',
    details: 'vouloir/pouvoir/devoir/aimer + infinitif. Attention: décider de / essayer de / commencer à …',
    example: 'Je veux apprendre. / J’essaie de comprendre.'
  },
  {
    id: 'near-past',
    title: 'Quá khứ gần (venir de)',
    summary: 'Việc vừa mới xảy ra.',
    details: 'venir de + infinitif (venir chia theo thì).',
    example: 'Je viens de finir. / Nous venons d’arriver.'
  },
  {
    id: 'participles-adjective',
    title: 'Participe passé như tính từ',
    summary: 'Nhiều participe passé dùng như tính từ.',
    details: 'Khi dùng như tính từ thì hòa hợp giống/số với danh từ.',
    example: 'une porte fermée / des enfants fatigués'
  },
  {
    id: 'reported-time',
    title: 'Từ chỉ thời gian trong tường thuật',
    summary: 'Hôm nay/hôm qua/ngày mai… khi kể lại.',
    details: 'aujourd’hui → ce jour-là; demain → le lendemain; hier → la veille; maintenant → à ce moment-là…',
    example: 'Il a dit qu’il viendrait le lendemain.'
  },

  // B2 – nâng cao, dùng nhiều trong viết/nói
  {
    id: 'conditionnel-passe',
    title: 'Conditionnel passé',
    summary: 'Giả định đã xảy ra trong quá khứ.',
    details: 'avoir/être (conditionnel) + participe passé.',
    example: 'J’aurais aimé venir. / Elle serait partie plus tôt.'
  },
  {
    id: 'subjunctive-past',
    title: 'Subjonctif passé (giới thiệu)',
    summary: 'Hành động “đã” xảy ra trước mệnh đề chính.',
    details: 'avoir/être (subjonctif) + participe passé.',
    example: 'Je suis content que tu sois venu.'
  },
  {
    id: 'causative-faire',
    title: 'Cấu trúc “faire + infinitif” (khiến/nhờ)',
    summary: 'Diễn tả “làm cho/nhờ ai làm”.',
    details: 'faire + V. Người thực hiện hành động thường đi với “par” hoặc gián tiếp tùy câu.',
    example: 'Je fais réparer ma voiture.'
  },
  {
    id: 'double-negation',
    title: 'Phủ định kép & sắc thái',
    summary: 'Tinh chỉnh ý nghĩa phủ định.',
    details: 'ne…ni…ni (không… cũng không), ne…que (chỉ), ne…aucun (không cái nào).',
    example: 'Je n’ai ni faim ni soif. / Je ne veux aucun problème.'
  },
  {
    id: 'ne-que',
    title: '“Ne…que” (chỉ)',
    summary: 'Thực chất là “chỉ” chứ không phải phủ định.',
    details: 'ne…que đặt quanh động từ; phần “que” đứng trước thành phần “được giới hạn”.',
    example: 'Je ne mange que des légumes.'
  },
  {
    id: 'hypothesis',
    title: 'Giả định & suy đoán (devoir/sembler/il paraît que)',
    summary: 'Diễn tả suy đoán tự nhiên.',
    details: 'Il doit être… (chắc là…); Il semble que…; Il paraît que…',
    example: 'Il doit être tard.'
  },
  {
    id: 'connectors',
    title: 'Từ nối lập luận (d’ailleurs/en effet/toutefois/néanmoins)',
    summary: 'Giúp bài viết mạch lạc.',
    details: 'en effet (thật vậy), toutefois/néanmoins (tuy nhiên), d’ailleurs (hơn nữa/nhân tiện).',
    example: 'Toutefois, il faut être prudent.'
  }
];

const practiceTasks = [
  { prompt: 'Tôi muốn cà phê.', answer: 'Je veux un café.' },
  { prompt: 'Cô ấy thích đọc sách.', answer: 'Elle aime lire des livres.' },
  { prompt: 'Chúng tôi đi đến trường.', answer: 'Nous allons à l’école.' },
  { prompt: 'Anh ấy đang ăn táo.', answer: 'Il mange une pomme.' }
];

const listeningTasks = [
  {
    sentence: 'Je m’appelle Marie.',
    options: ['Tôi tên là Marie.', 'Tôi sống ở Paris.', 'Tôi thích ăn.', 'Tôi đang học.'],
    answer: 'Tôi tên là Marie.'
  },
  {
    sentence: 'Où est la gare ?',
    options: ['Nhà ga ở đâu?', 'Bạn khỏe không?', 'Tôi muốn ăn.', 'Anh ấy là bác sĩ.'],
    answer: 'Nhà ga ở đâu?'
  },
  {
    sentence: 'Je voudrais un croissant.',
    options: ['Tôi muốn một bánh sừng bò.', 'Tôi có một cây bút.', 'Tôi yêu thích âm nhạc.', 'Tôi đọc sách.'],
    answer: 'Tôi muốn một bánh sừng bò.'
  },
  {
    sentence: 'Il fait très chaud aujourd’hui.',
    options: ['Hôm nay trời rất nóng.', 'Tôi rất đói.', 'Cô ấy đang ngủ.', 'Anh ấy thích cà phê.'],
    answer: 'Hôm nay trời rất nóng.'
  },
  {
    sentence: 'Je suis allé au marché ce matin.',
    options: ['Tôi đã đi chợ sáng nay.', 'Tôi làm việc tối qua.', 'Tôi học tiếng Anh.', 'Tôi mua một chiếc áo.'],
    answer: 'Tôi đã đi chợ sáng nay.'
  },
  {
    sentence: 'Nous aimons voyager ensemble.',
    options: ['Chúng tôi thích đi du lịch cùng nhau.', 'Chúng tôi học cùng lớp.', 'Chúng tôi ăn trưa ở nhà.', 'Chúng tôi có hai con.'],
    answer: 'Chúng tôi thích đi du lịch cùng nhau.'
  }
];

const speakingTasks = [
  { prompt: 'Je parle de ma journée.', expected: 'Je parle de ma journée.' },
  { prompt: 'J’aime apprendre le français.', expected: 'J’aime apprendre le français.' },
  { prompt: 'Aujourd’hui, je vais au marché.', expected: 'Aujourd’hui, je vais au marché.' },
  { prompt: 'Je veux un verre d’eau.', expected: 'Je veux un verre d’eau.' }
];

const pronunciationTasks = [
  { phrase: 'Je voudrais un café, s’il vous plaît.' },
  { phrase: 'Où sont les toilettes ?' },
  { phrase: 'Je ne parle pas très bien français.' },
  { phrase: 'Pouvez-vous répéter, s’il vous plaît ?' }
];

const dialogueTasks = [
  {
    title: 'Quán cà phê',
    lines: [
      { speaker: 'Nhân viên', fr: 'Bonjour, vous désirez ?', vi: 'Xin chào, anh/chị muốn gì?' },
      { speaker: 'Khách', fr: 'Je voudrais un café et un croissant.', vi: 'Tôi muốn một cà phê và một bánh sừng bò.' },
      { speaker: 'Nhân viên', fr: 'Avec plaisir, ce sera tout ?', vi: 'Vâng ạ, còn gì nữa không?' },
      { speaker: 'Khách', fr: 'Oui, merci.', vi: 'Vâng, cảm ơn.' }
    ]
  },
  {
    title: 'Tại nhà hàng',
    lines: [
      { speaker: 'Nhân viên', fr: 'Bonjour, vous avez réservé ?', vi: 'Xin chào, anh/chị đã đặt bàn chưa?' },
      { speaker: 'Khách', fr: 'Oui, au nom de Nam.', vi: 'Có, tên Nam.' },
      { speaker: 'Nhân viên', fr: 'Suivez-moi, je vous en prie.', vi: 'Mời anh/chị theo tôi.' }
    ]
  },
  {
    title: 'Tại ga tàu',
    lines: [
      { speaker: 'Khách', fr: 'Le train pour Paris part à quelle heure ?', vi: 'Tàu đi Paris lúc mấy giờ?' },
      { speaker: 'Nhân viên', fr: 'Il part à quinze heures.', vi: 'Nó đi lúc 3 giờ chiều.' }
    ]
  }
];

const baseQuizQuestions = [
  {
    question: '“Je suis” nghĩa là gì?',
    choices: ['Tôi là', 'Bạn là', 'Chúng tôi có', 'Họ làm'],
    answer: 'Tôi là'
  },
  {
    question: 'Chọn từ để nói “Xin chào”',
    choices: ['Merci', 'Au revoir', 'Bonjour', 'S’il vous plaît'],
    answer: 'Bonjour'
  },
  {
    question: 'Từ nào là mạo từ xác định?',
    choices: ['Un', 'La', 'Des', 'Pomme'],
    answer: 'La'
  },
  {
    question: '“Nous allons à l’école” nghĩa là?',
    choices: ['Chúng tôi nghe nhạc', 'Chúng tôi đi học', 'Chúng tôi ăn cơm', 'Chúng tôi ngủ'],
    answer: 'Chúng tôi đi học'
  }
];

const roadmapItems = [
  { id: 'a1', title: 'A1 - Khởi đầu', description: 'Chào hỏi, giới thiệu và câu hỏi cơ bản.', focus: 'Nắm vững giao tiếp đơn giản thường ngày.', completed: false },
  { id: 'a2', title: 'A2 - Ứng dụng', description: 'Mua sắm, du lịch, ẩm thực và giờ giấc.', focus: 'Sử dụng câu ngắn trong tình huống thực tế.', completed: false },
  { id: 'b1', title: 'B1 - Mở rộng', description: 'Gia đình, cảm xúc, mô tả và thói quen.', focus: 'Kể chuyện ngắn và mô tả ý kiến.', completed: false },
  { id: 'b2', title: 'B2 - Thuyết trình', description: 'Hội thoại, lập luận và diễn đạt phong phú.', focus: 'Nói tự nhiên và phản xạ nhanh hơn.', completed: false },
  { id: 'c1', title: 'C1 - Nâng cao', description: 'Diễn đạt sắc thái, từ vựng chuyên sâu.', focus: 'Đọc báo chí, tranh luận và thảo luận.', completed: false },
  { id: 'c2', title: 'C2 - Tinh thông', description: 'Viết luận, thảo luận và phát âm chuẩn.', focus: 'Sử dụng tiếng Pháp như người bản xứ.', completed: false }
];

const dailyChallenges = [
  'Dịch 1 câu tiếng Việt sang tiếng Pháp.',
  'Nghe và chọn đáp án chính xác cho câu nghe.',
  'Luyện nói 1 câu ngắn bằng tiếng Pháp.',
  'Đọc to 1 câu tiếng Pháp và so sánh với mẫu âm.',
  'Xem lại 1 chủ đề từ vựng yêu thích.'
];

let currentDailyChallenge = 0;
let onlyFavorites = false;

let activeFlashcard = 0;
let activePractice = 0;
let activeListening = 0;
let activeSpeaking = 0;
let activePronunciation = 0;
let activeDialogue = 0;
let quizState = { current: 0, score: 0, total: 0, active: false, questions: [] };
let selectedLevel = 'all';
let selectedTopic = 'all';
let vocabTopics = ['all', ...new Set(vocabularies.map(item => item.topic))];
let quizMode = 'vocab'; // vocab | grammar
let quizVocabSelectedLevel = 'all';
let quizVocabSelectedTopic = 'all';
let quizGrammarSelectedLevel = 'all';
let quizGrammarSelectedTopic = 'all'; // dùng tag như "chủ đề"
let searchQuery = '';
let grammarQuery = '';
let grammarReadIds = [];
let expandedGrammarId = null;
let grammarSelectedLevel = 'all';
let grammarSelectedTag = 'all';
let grammarSelectedStatus = 'all'; // all | unread | read
let favoriteWords = [];
let activityHistoryList = [];
let roadmapProgress = {};
let vocabVisibleLimit = 80;
let dailyGoal = { date: '', done: false };
let recognition = null;
let isRecognizing = false;
let recognitionStopRequested = false;
let recognitionHasResult = false;
let speechMode = 'speaking';
let dialogueTranslationVisible = false;
let vocabSearchDebounce = null;
let grammarSearchDebounce = null;
let firebaseReady = false;
let cloudSyncInProgress = false;
let cloudSyncDebounce = null;
let suppressCloudSync = false;
let auth = null;
let db = null;
let currentUser = null;
let authLoading = false;
let uiPrefsLoaded = false;

const firebaseConfig = {
  apiKey: 'AIzaSyB3ZaPfX8hjFLv-MFReKb3aF7HAOSla8iA',
  authDomain: 'app-frecnh.firebaseapp.com',
  projectId: 'app-frecnh',
  storageBucket: 'app-frecnh.firebasestorage.app',
  messagingSenderId: '75444091062',
  appId: '1:75444091062:web:c131b889bf6a6d8061ce17'
};

function updateSection(sectionId) {
  sections.forEach(section => {
    section.classList.toggle('active-section', section.id === sectionId);
  });
  menuButtons.forEach(button => {
    button.classList.toggle('active', button.dataset.section === sectionId);
  });
  const activeButton = Array.from(menuButtons).find(btn => btn.dataset.section === sectionId);
  if (activeButton) {
    currentSectionTitle.textContent = activeButton.textContent;
  }
}

function readStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function loadUiPreferences() {
  const prefs = readStorage('frenchCoachUiPrefs', null);
  if (!prefs || typeof prefs !== 'object') return;
  selectedLevel = prefs.selectedLevel || selectedLevel;
  selectedTopic = prefs.selectedTopic || selectedTopic;
  quizMode = prefs.quizMode || quizMode;
  quizVocabSelectedLevel = prefs.quizVocabSelectedLevel || quizVocabSelectedLevel;
  quizVocabSelectedTopic = prefs.quizVocabSelectedTopic || quizVocabSelectedTopic;
  quizGrammarSelectedLevel = prefs.quizGrammarSelectedLevel || quizGrammarSelectedLevel;
  quizGrammarSelectedTopic = prefs.quizGrammarSelectedTopic || quizGrammarSelectedTopic;
  grammarSelectedLevel = prefs.grammarSelectedLevel || grammarSelectedLevel;
  grammarSelectedTag = prefs.grammarSelectedTag || grammarSelectedTag;
  grammarSelectedStatus = prefs.grammarSelectedStatus || grammarSelectedStatus;
  onlyFavorites = typeof prefs.onlyFavorites === 'boolean' ? prefs.onlyFavorites : onlyFavorites;
  uiPrefsLoaded = true;
}

function saveUiPreferences() {
  localStorage.setItem('frenchCoachUiPrefs', JSON.stringify({
    selectedLevel,
    selectedTopic,
    quizMode,
    quizVocabSelectedLevel,
    quizVocabSelectedTopic,
    quizGrammarSelectedLevel,
    quizGrammarSelectedTopic,
    grammarSelectedLevel,
    grammarSelectedTag,
    grammarSelectedStatus,
    onlyFavorites
  }));
  queueCloudSync();
}

function updateStats() {
  const stats = readStorage('frenchCoachStats', {
    wordsLearned: vocabularies.length,
    grammarRead: 0,
    quizScore: 0,
    streak: 0,
    lastPractice: null
  });
  wordsLearned.textContent = stats.wordsLearned;
  const grammarReadCount = Array.isArray(grammarReadIds) ? grammarReadIds.length : 0;
  grammarRead.textContent = grammarReadCount;
  quizScore.textContent = stats.quizScore;
  favoriteCount.textContent = favoriteWords.length;
  streakCounter.textContent = `Chuỗi ngày: ${stats.streak}`;
}

function saveStats(overrides = {}) {
  const existing = readStorage('frenchCoachStats', {});
  localStorage.setItem('frenchCoachStats', JSON.stringify({
    wordsLearned: vocabularies.length,
    grammarRead: Array.isArray(grammarReadIds) ? grammarReadIds.length : 0,
    quizScore: existing.quizScore || 0,
    streak: existing.streak || 0,
    lastPractice: existing.lastPractice || null,
    ...overrides
  }));
  updateStats();
  queueCloudSync();
}

function loadFavorites() {
  favoriteWords = readStorage('frenchCoachFavorites', []);
}

function saveFavorites() {
  localStorage.setItem('frenchCoachFavorites', JSON.stringify(favoriteWords));
  updateStats();
  queueCloudSync();
}

function isFavorite(word) {
  return favoriteWords.includes(word);
}

function toggleFavoriteWord(word) {
  if (isFavorite(word)) {
    favoriteWords = favoriteWords.filter(item => item !== word);
    recordActivity(`Xoá yêu thích: ${word}`);
  } else {
    favoriteWords.push(word);
    recordActivity(`Yêu thích: ${word}`);
  }
  saveFavorites();
  renderVocabList();
}

function loadHistory() {
  activityHistoryList = readStorage('frenchCoachHistory', []);
}

function loadGrammarRead() {
  grammarReadIds = readStorage('frenchCoachGrammarRead', []);
  if (!Array.isArray(grammarReadIds)) grammarReadIds = [];
}

function saveGrammarRead() {
  localStorage.setItem('frenchCoachGrammarRead', JSON.stringify(grammarReadIds));
  saveStats();
  queueCloudSync();
}

function isGrammarRead(id) {
  return Array.isArray(grammarReadIds) && grammarReadIds.includes(id);
}

function toggleGrammarRead(id) {
  const lesson = grammarLessons.find(item => item.id === id);
  if (!lesson) return;
  if (isGrammarRead(id)) {
    grammarReadIds = grammarReadIds.filter(item => item !== id);
    recordActivity(`Bỏ đánh dấu ngữ pháp: ${lesson.title}`);
  } else {
    grammarReadIds.push(id);
    recordActivity(`Đã học ngữ pháp: ${lesson.title}`);
    maybeUpdateStreak();
  }
  saveGrammarRead();
  renderGrammar();
}

function saveHistory() {
  localStorage.setItem('frenchCoachHistory', JSON.stringify(activityHistoryList));
  queueCloudSync();
}

function recordActivity(text) {
  const time = new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
  activityHistoryList.unshift(`${time} — ${text}`);
  activityHistoryList = activityHistoryList.slice(0, 6);
  saveHistory();
  renderHistory();
}

function renderHistory() {
  activityHistory.innerHTML = activityHistoryList.length
    ? activityHistoryList.map(item => `<li>${item}</li>`).join('')
    : '<li>Chưa có hoạt động. Bắt đầu học ngay!</li>';
}

function loadRoadmap() {
  roadmapProgress = readStorage('frenchCoachRoadmap', {});
}

function saveRoadmap() {
  localStorage.setItem('frenchCoachRoadmap', JSON.stringify(roadmapProgress));
  queueCloudSync();
}

function toggleRoadmapItem(id) {
  roadmapProgress[id] = !roadmapProgress[id];
  saveRoadmap();
  renderRoadmap();
  renderDashboardChallenge();
  recordActivity(`${roadmapProgress[id] ? 'Hoàn thành' : 'Bỏ hoàn thành'}: ${id.toUpperCase()}`);
}

function renderRoadmap() {
  roadmapList.innerHTML = roadmapItems.map(item => `
    <article class="card roadmap-card ${roadmapProgress[item.id] ? 'completed' : ''}">
      <div>
        <p class="roadmap-level">${item.title}</p>
        <h4>${item.description}</h4>
        <p class="roadmap-focus">${item.focus}</p>
      </div>
      <button class="pill roadmap-toggle" data-roadmap="${item.id}">${roadmapProgress[item.id] ? 'Hoàn thành' : 'Đánh dấu'}</button>
    </article>
  `).join('');
}

function clearRoadmap() {
  roadmapProgress = {};
  saveRoadmap();
  renderRoadmap();
  renderDashboardChallenge();
  recordActivity('Đặt lại tiến độ lộ trình');
}

function loadDailyGoal() {
  const today = new Date().toDateString();
  const saved = readStorage('frenchCoachDailyGoal', { date: today, done: false });
  dailyGoal = saved.date === today ? saved : { date: today, done: false };
}

function saveDailyGoal() {
  localStorage.setItem('frenchCoachDailyGoal', JSON.stringify(dailyGoal));
  queueCloudSync();
}

function renderDailyGoal() {
  if (!dailyGoalStatus || !completeDailyGoal) return;
  dailyGoalStatus.textContent = dailyGoal.done
    ? 'Tuyệt vời! Bạn đã hoàn thành mục tiêu học hôm nay.'
    : 'Hôm nay bạn chưa hoàn thành mục tiêu.';
  completeDailyGoal.textContent = dailyGoal.done
    ? 'Đã hoàn thành hôm nay'
    : 'Đánh dấu hoàn thành hôm nay';
  completeDailyGoal.disabled = dailyGoal.done;
}

function completeTodayGoal() {
  if (dailyGoal.done) return;
  dailyGoal.done = true;
  saveDailyGoal();
  renderDailyGoal();
  maybeUpdateStreak();
  recordActivity('Hoàn thành mục tiêu học hôm nay');
}

function renderPractice() {
  const task = practiceTasks[activePractice];
  practicePrompt.textContent = task.prompt;
  practiceAnswer.value = '';
  practiceFeedback.textContent = '';
}

function isSpeechFeatureLikelyToWork() {
  // SpeechRecognition thường cần Secure Context (HTTPS hoặc localhost/127.0.0.1)
  const host = window.location && window.location.hostname;
  const isLocal = host === 'localhost' || host === '127.0.0.1';
  return Boolean(window.isSecureContext || isLocal);
}

function updateSpeechHints() {
  if (!speakingInstructions) return;
  if (!isSpeechFeatureLikelyToWork()) {
    speakingInstructions.textContent = 'Lưu ý: Nhận diện giọng nói thường chỉ hoạt động trên HTTPS hoặc localhost/127.0.0.1. Nếu bạn mở bằng HTTP trên IP khác, hãy chuyển sang localhost hoặc dùng HTTPS.';
    return;
  }
  speakingInstructions.textContent = 'Nhấn nút và nói theo câu tiếng Pháp.';
}

function renderSpeaking() {
  const task = speakingTasks[activeSpeaking];
  updateSpeechHints();
  speakingPrompt.textContent = task.prompt;
  speakingRecognized.textContent = '';
  speakingFeedback.textContent = '';
}

function renderPronunciation() {
  const task = pronunciationTasks[activePronunciation];
  pronunciationPrompt.textContent = task.phrase;
  pronunciationRecognized.textContent = '';
  pronunciationFeedback.textContent = '';
}

function renderDialogue() {
  const task = dialogueTasks[activeDialogue];
  dialogueTitle.textContent = task.title;
  dialogueText.innerHTML = task.lines.map(line => `
    <div class="dialogue-line">
      <p class="dialogue-speaker"><strong>${line.speaker}:</strong> ${line.fr}</p>
      <p class="dialogue-translation" style="display: ${dialogueTranslationVisible ? 'block' : 'none'}">${line.vi}</p>
    </div>
  `).join('');
}

function switchPracticeTab(tab) {
  practiceTabs.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tab);
  });
  translatePanel.style.display = tab === 'translate' ? 'block' : 'none';
  speakingPanel.style.display = tab === 'speaking' ? 'block' : 'none';
  pronunciationPanel.style.display = tab === 'pronunciation' ? 'block' : 'none';
  dialoguePanel.style.display = tab === 'dialogue' ? 'block' : 'none';
}

function beginSpeechRecognition() {
  if (!recognition) {
    const errorText = 'Trình duyệt không hỗ trợ nhận diện giọng nói.';
    if (speechMode === 'speaking') {
      speakingFeedback.textContent = errorText;
      speakingFeedback.style.color = '#ff6b6b';
    } else if (speechMode === 'pronunciation') {
      pronunciationFeedback.textContent = errorText;
      pronunciationFeedback.style.color = '#ff6b6b';
    }
    return false;
  }
  recognitionHasResult = false;
  recognitionStopRequested = false;
  isRecognizing = true;
  recognition.start();
  return true;
}

function maybeUpdateStreak() {
  const stats = readStorage('frenchCoachStats', { streak: 0, lastPractice: null, quizScore: 0 });
  const today = new Date().toDateString();
  if (stats.lastPractice !== today) {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    const newStreak = stats.lastPractice === yesterday ? stats.streak + 1 : 1;
    saveStats({ streak: newStreak, lastPractice: today, quizScore: stats.quizScore });
  }
}

function renderFlashcard() {
  const item = vocabularies[activeFlashcard];
  flashcardWord.textContent = item.word;
  flashcardDefinition.textContent = item.meaning;
}

function renderVocabList() {
  const filtered = vocabularies.filter(vocab => {
    const matchLevel = selectedLevel === 'all' || vocab.level === selectedLevel;
    const matchTopic = selectedTopic === 'all' || vocab.topic === selectedTopic;
    const text = `${vocab.word} ${vocab.meaning} ${vocab.example} ${vocab.topic}`.toLowerCase();
    const matchSearch = !searchQuery || text.includes(searchQuery.toLowerCase());
    const matchFavorite = !onlyFavorites || isFavorite(vocab.word);
    return matchLevel && matchTopic && matchSearch && matchFavorite;
  });
  const visible = filtered.slice(0, vocabVisibleLimit);

  vocabList.innerHTML = visible.length ? visible.map(vocab => `
    <article class="card vocab-card">
      <div class="vocab-card-top">
        <div class="vocab-badge">${getDifficultyStars(vocab.level, vocab.difficulty)}</div>
        <button class="pill favorite-button ${isFavorite(vocab.word) ? 'active' : ''}" data-word="${vocab.word}">
          ${isFavorite(vocab.word) ? '★' : '☆'}
        </button>
      </div>
      <h4>${vocab.word}</h4>
      <p>${vocab.meaning}</p>
      <small>${vocab.example}</small>
      <span class="vocab-tag">${vocab.topic}</span>
    </article>
  `).join('') : '<div class="card empty-state">Không tìm thấy từ nào phù hợp.</div>';

  if (vocabResultSummary) {
    const shown = Math.min(filtered.length, vocabVisibleLimit);
    vocabResultSummary.textContent = `Hiển thị ${shown}/${filtered.length} từ (tổng kho: ${vocabularies.length}).`;
  }
  if (loadMoreVocab) {
    loadMoreVocab.style.display = filtered.length > vocabVisibleLimit ? 'inline-flex' : 'none';
  }
}

function renderTopicButtons() {
  if (!topicButtons) return;
  topicButtons.innerHTML = vocabTopics.map(topic => `
    <button class="pill topic-button ${selectedTopic === topic ? 'active' : ''}" data-topic="${topic}">
      ${topic === 'all' ? 'Tất cả chủ đề' : topic}
    </button>
  `).join('');
}

function getGrammarLevelById(id) {
  const a1 = new Set([
    'articles', 'etre', 'avoir', 'subject-pronouns', 'present-er', 'negation', 'questions', 'question-words',
    'adjectives', 'adjectives-position', 'possessive', 'demonstratives', 'articles-contraction', 'prepositions-place',
    'countries-preps', 'time-expressions', 'partitive'
  ]);
  const a2 = new Set([
    'present-ir', 'present-re', 'present-ir2', 'negation-advanced', 'comparatives', 'superlatives', 'imperative',
    'reflexive', 'pronouns-stressed', 'passe-compose', 'near-past'
  ]);
  const b1 = new Set([
    'past-participle-agreement', 'imparfait', 'passe-compose-vs-imparfait', 'plus-que-parfait', 'futur-simple',
    'conditionnel-present', 'si-clauses', 'object-pronouns-direct', 'object-pronouns-indirect', 'pronoun-order',
    'y-pronoun', 'en-pronoun', 'relative-qui-que', 'relative-dont-ou', 'adverbs', 'frequency', 'quantity',
    'gerund', 'present-participle', 'passive-voice', 'indirect-speech', 'reported-time', 'participles-adjective',
    'infinitive-constructions'
  ]);
  const b2 = new Set([
    'subjunctive-intro', 'subjunctive-forms', 'subjunctive-vs-indicative', 'relative-which', 'cause-consequence',
    'concession', 'connectors', 'conditionnel-passe', 'subjunctive-past', 'causative-faire', 'double-negation',
    'ne-que', 'hypothesis'
  ]);
  if (b2.has(id)) return 'B2';
  if (b1.has(id)) return 'B1';
  if (a2.has(id)) return 'A2';
  if (a1.has(id)) return 'A1';
  return 'B1';
}

function inferGrammarTags(id) {
  const tags = [];
  if (/(present-|imperative|reflexive|causative|infinitive|near-past)/.test(id) || id === 'etre' || id === 'avoir') {
    tags.push('Động từ');
  }
  if (/(passe|imparfait|futur|conditionnel|subjunctive|plus-que-parfait)/.test(id)) {
    tags.push('Thì & thể');
  }
  if (/(pronoun|relative|y-pronoun|en-pronoun)/.test(id) || id === 'subject-pronouns') {
    tags.push('Đại từ');
  }
  if (/(question|indirect-speech|passive-voice|si-clauses)/.test(id)) {
    tags.push('Câu & cấu trúc');
  }
  if (/(articles|adjectives|comparatives|superlatives|possessive|demonstratives|partitive|quantity|ne-que|double-negation)/.test(id)) {
    tags.push('Từ loại & lượng');
  }
  if (/(prepositions|countries-preps|time-expressions)/.test(id)) {
    tags.push('Giới từ & thời gian');
  }
  if (/(connectors|cause-consequence|concession|reported-time)/.test(id)) {
    tags.push('Liên kết & viết');
  }
  return tags.length ? tags : ['Khác'];
}

function getAllGrammarTags() {
  const set = new Set();
  grammarLessons.forEach(lesson => {
    inferGrammarTags(lesson.id).forEach(tag => set.add(tag));
  });
  return ['all', ...Array.from(set)];
}

function renderGrammarFilters() {
  if (!grammarLevelButtons || !grammarTagButtons || !grammarStatusButtons) return;

  const levels = ['all', 'A1', 'A2', 'B1', 'B2'];
  const tags = getAllGrammarTags();
  const status = [
    { id: 'all', label: 'Tất cả' },
    { id: 'unread', label: 'Chưa học' },
    { id: 'read', label: 'Đã học' }
  ];

  grammarLevelButtons.innerHTML = levels.map(level => `
    <button class="pill grammar-level-button ${grammarSelectedLevel === level ? 'active' : ''}" data-grammar-level="${level}">
      ${level === 'all' ? 'Tất cả cấp' : level}
    </button>
  `).join('');

  grammarTagButtons.innerHTML = tags.map(tag => `
    <button class="pill grammar-tag-button ${grammarSelectedTag === tag ? 'active' : ''}" data-grammar-tag="${tag}">
      ${tag === 'all' ? 'Tất cả chủ điểm' : tag}
    </button>
  `).join('');

  grammarStatusButtons.innerHTML = status.map(item => `
    <button class="pill grammar-status-button ${grammarSelectedStatus === item.id ? 'active' : ''}" data-grammar-status="${item.id}">
      ${item.label}
    </button>
  `).join('');
}

function renderGrammar() {
  const filtered = grammarLessons.filter(lesson => {
    const level = getGrammarLevelById(lesson.id);
    const tags = inferGrammarTags(lesson.id);
    const isRead = isGrammarRead(lesson.id);

    const matchLevel = grammarSelectedLevel === 'all' || level === grammarSelectedLevel;
    const matchTag = grammarSelectedTag === 'all' || tags.includes(grammarSelectedTag);
    const matchStatus = grammarSelectedStatus === 'all'
      || (grammarSelectedStatus === 'read' && isRead)
      || (grammarSelectedStatus === 'unread' && !isRead);

    const query = grammarQuery.trim().toLowerCase();
    const matchQuery = !query || `${lesson.title} ${lesson.summary} ${lesson.details} ${lesson.example}`.toLowerCase().includes(query);

    return matchLevel && matchTag && matchStatus && matchQuery;
  });
  const total = grammarLessons.length;
  const learned = Array.isArray(grammarReadIds) ? grammarReadIds.length : 0;
  if (grammarProgress) {
    grammarProgress.textContent = `Đã học ${learned}/${total} • Hiển thị ${filtered.length}/${total} bài.`;
  }

  grammarList.innerHTML = filtered.length ? filtered.map(lesson => {
    const isRead = isGrammarRead(lesson.id);
    const isExpanded = expandedGrammarId === lesson.id;
    const level = getGrammarLevelById(lesson.id);
    const tags = inferGrammarTags(lesson.id);
    return `
      <article class="card grammar-card ${isRead ? 'completed' : ''}">
        <div class="grammar-card-top">
          <h4>${lesson.title}</h4>
          ${isRead ? '<span class="grammar-badge">Đã học</span>' : ''}
        </div>
        <p>${lesson.summary}</p>
        <p class="grammar-meta">${level} • ${tags.join(' • ')}</p>
        ${isExpanded ? `
          <div class="grammar-details">
            <p>${lesson.details}</p>
            <p><strong>Ví dụ:</strong> ${lesson.example}</p>
          </div>
        ` : ''}
        <div class="grammar-card-actions">
          <button class="pill secondary grammar-toggle" data-grammar-toggle="${lesson.id}">
            ${isExpanded ? 'Thu gọn' : 'Xem thêm'}
          </button>
          <button class="pill grammar-mark ${isRead ? 'secondary' : ''}" data-grammar="${lesson.id}">
            ${isRead ? 'Đã học' : 'Đánh dấu đã học'}
          </button>
        </div>
      </article>
    `;
  }).join('') : '<div class="card empty-state">Không tìm thấy chủ đề ngữ pháp phù hợp.</div>';
}

function renderDashboardChallenge() {
  if (!dashboardChallenge) return;
  const index = currentDailyChallenge % dailyChallenges.length;
  const completed = Object.values(roadmapProgress).filter(Boolean).length;
  const percent = roadmapItems.length ? Math.round((completed / roadmapItems.length) * 100) : 0;
  dashboardChallenge.innerHTML = `
    ${dailyChallenges[index]}<br>
    <strong>Tiến độ lộ trình:</strong> ${percent}% hoàn thành.<br>
    <strong>Gợi ý:</strong> Chọn tab phù hợp và luyện ngay.
  `;
}

function normalizeFrenchText(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’']/g, "'")
    .replace(/[^a-z0-9'\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function getDifficultyStars(level, difficulty) {
  const filled = '★'.repeat(difficulty || 1);
  const empty = '☆'.repeat(5 - (difficulty || 1));
  return `${level} ${filled}${empty}`;
}

function shuffleArray(items) {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getRandomItems(items, count, excludeSet = new Set()) {
  if (!Array.isArray(items) || !items.length) return [];
  const pool = items.filter(item => !excludeSet.has(item));
  return shuffleArray(pool).slice(0, count);
}

function getQuizSourceVocabularies() {
  return vocabularies.filter(vocab => {
    const matchLevel = quizVocabSelectedLevel === 'all' || vocab.level === quizVocabSelectedLevel;
    const matchTopic = quizVocabSelectedTopic === 'all' || vocab.topic === quizVocabSelectedTopic;
    return matchLevel && matchTopic;
  });
}

function getQuizSourceGrammarLessons() {
  const tags = getAllGrammarTags();
  const selectedTag = tags.includes(quizGrammarSelectedTopic) ? quizGrammarSelectedTopic : 'all';
  return grammarLessons.filter(lesson => {
    const level = getGrammarLevelById(lesson.id);
    const lessonTags = inferGrammarTags(lesson.id);
    const matchLevel = quizGrammarSelectedLevel === 'all' || level === quizGrammarSelectedLevel;
    const matchTag = selectedTag === 'all' || lessonTags.includes(selectedTag);
    return matchLevel && matchTag;
  });
}

function buildQuizQuestionsFromVocab(options = {}) {
  const { count = 10 } = options;
  const source = getQuizSourceVocabularies();
  if (source.length < 4) return null;

  const questions = [];
  const used = new Set();
  const maxQuestions = Math.min(count, source.length);
  const allowExtra = quizVocabSelectedLevel === 'all' && quizVocabSelectedTopic === 'all';
  const meaningPool = Array.from(new Set(source.map(item => item.meaning).filter(Boolean)));
  const wordPool = Array.from(new Set(source.map(item => item.word).filter(Boolean)));

  for (let i = 0; i < maxQuestions; i += 1) {
    // chọn 1 mục ngẫu nhiên chưa dùng
    let pick = null;
    let safety = 0;
    while (!pick && safety < 50) {
      const candidate = source[Math.floor(Math.random() * source.length)];
      if (!used.has(candidate.word)) pick = candidate;
      safety += 1;
    }
    if (!pick) break;
    used.add(pick.word);

    const askMeaning = Math.random() < 0.55;
    if (askMeaning) {
      const correct = pick.meaning;
      const distractors = shuffleArray(meaningPool.filter(item => item !== correct));
      if (distractors.length < 3) continue;
      const choices = shuffleArray([correct, ...distractors.slice(0, 3)]);
      questions.push({
        level: pick.level,
        topic: pick.topic,
        question: `“${pick.word}” nghĩa là gì?`,
        choices,
        answer: correct
      });
    } else {
      const correct = pick.word;
      const distractors = shuffleArray(wordPool.filter(item => item !== correct));
      if (distractors.length < 3) continue;
      const choices = shuffleArray([correct, ...distractors.slice(0, 3)]);
      questions.push({
        level: pick.level,
        topic: pick.topic,
        question: `Từ nào có nghĩa: “${pick.meaning}”?`,
        choices,
        answer: correct
      });
    }
  }

  // Chỉ thêm câu mẫu khi người dùng đang để “Tất cả” (để tránh cảm giác “không đúng chủ đề”)
  const extra = allowExtra ? shuffleArray(baseQuizQuestions).slice(0, 2) : [];
  return shuffleArray([...questions, ...extra]).slice(0, Math.max(6, Math.min(12, questions.length + extra.length)));
}

function buildQuizQuestionsFromGrammar(options = {}) {
  const { count = 10 } = options;
  const source = getQuizSourceGrammarLessons();
  if (source.length < 4) return null;

  const questions = [];
  const used = new Set();
  const maxQuestions = Math.min(count, source.length);

  for (let i = 0; i < maxQuestions; i += 1) {
    let pick = null;
    let safety = 0;
    while (!pick && safety < 50) {
      const candidate = source[Math.floor(Math.random() * source.length)];
      if (!used.has(candidate.id)) pick = candidate;
      safety += 1;
    }
    if (!pick) break;
    used.add(pick.id);

    const correct = pick.title;
    const distractors = shuffleArray(source.map(item => item.title).filter(Boolean)).filter(item => item !== correct);
    const choices = shuffleArray([correct, ...distractors.slice(0, 3)]);
    const detailSnippet = (pick.details || '').split('.').slice(0, 2).join('.').trim();
    questions.push({
      level: getGrammarLevelById(pick.id),
      topic: inferGrammarTags(pick.id)[0] || 'Ngữ pháp',
      question: `Bài ngữ pháp nào phù hợp với mô tả sau?\n\n${pick.summary}${detailSnippet ? `\nGợi ý: ${detailSnippet}.` : ''}\n\nVí dụ: ${pick.example}`,
      choices,
      answer: correct
    });
  }

  return shuffleArray(questions).slice(0, Math.max(6, Math.min(12, questions.length)));
}

function renderQuizFilters() {
  if (!quizLevelButtons || !quizTopicButtons) return;
  if (quizModeVocab) quizModeVocab.classList.toggle('active', quizMode === 'vocab');
  if (quizModeGrammar) quizModeGrammar.classList.toggle('active', quizMode === 'grammar');

  const isGrammar = quizMode === 'grammar';
  const levels = isGrammar ? ['all', 'A1', 'A2', 'B1', 'B2'] : ['all', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const selectedLevel = isGrammar ? quizGrammarSelectedLevel : quizVocabSelectedLevel;
  const selectedTopic = isGrammar ? quizGrammarSelectedTopic : quizVocabSelectedTopic;
  const topics = isGrammar ? getAllGrammarTags() : vocabTopics;

  quizLevelButtons.innerHTML = levels.map(level => `
    <button class="pill quiz-level-button ${selectedLevel === level ? 'active' : ''}" data-quiz-level="${level}">
      ${level === 'all' ? 'Tất cả' : level}
    </button>
  `).join('');

  quizTopicButtons.innerHTML = topics.map(topic => `
    <button class="pill quiz-topic-button ${selectedTopic === topic ? 'active' : ''}" data-quiz-topic="${topic}">
      ${topic === 'all' ? (isGrammar ? 'Tất cả chủ điểm' : 'Tất cả chủ đề') : topic}
    </button>
  `).join('');

  updateQuizFilterSummary();
}

function updateQuizFilterSummary() {
  if (!quizFilterSummary) return;
  if (quizMode === 'grammar') {
    const source = getQuizSourceGrammarLessons();
    const levelLabel = quizGrammarSelectedLevel === 'all' ? 'Tất cả cấp độ' : `Cấp độ ${quizGrammarSelectedLevel}`;
    const topicLabel = quizGrammarSelectedTopic === 'all' ? 'Tất cả chủ điểm' : `Chủ điểm: ${quizGrammarSelectedTopic}`;
    quizFilterSummary.textContent = `${levelLabel} • ${topicLabel} • Ngân hàng: ${source.length} bài.`;
    return;
  }
  const source = getQuizSourceVocabularies();
  const levelLabel = quizVocabSelectedLevel === 'all' ? 'Tất cả cấp độ' : `Cấp độ ${quizVocabSelectedLevel}`;
  const topicLabel = quizVocabSelectedTopic === 'all' ? 'Tất cả chủ đề' : `Chủ đề: ${quizVocabSelectedTopic}`;
  quizFilterSummary.textContent = `${levelLabel} • ${topicLabel} • Ngân hàng: ${source.length} từ.`;
}

function similarityScore(a, b) {
  if (!a.length && !b.length) return 1;
  if (!a.length || !b.length) return 0;
  const wordsA = a.split(' ');
  const wordsB = b.split(' ');
  const matches = wordsA.filter(word => wordsB.includes(word)).length;
  return matches / Math.max(wordsA.length, wordsB.length);
}

function getPronunciationAdvice(transcript, expected) {
  const normalizedTranscript = normalizeFrenchText(transcript);
  const normalizedExpected = normalizeFrenchText(expected);
  const score = similarityScore(normalizedTranscript, normalizedExpected);
  if (normalizedTranscript === normalizedExpected) {
    return 'Phát âm rất tốt rồi. Hãy tiếp tục luyện theo nhịp như vậy.';
  }
  if (score >= 0.7) {
    return 'Bạn đã gần đúng. Chú ý phát âm rõ các âm cuối và nhấn nhá từ chính.';
  }
  if (score >= 0.4) {
    return 'Cần luyện lại câu này. Tập trung vào nhấn mạnh từ quan trọng và phát âm âm đầu, âm cuối.';
  }
  return 'Bạn cần luyện thêm. Nghe chậm và lặp lại từng cụm từ, chú ý âm thanh giống câu mẫu.';
}

function setupSpeechRecognition(forceReset = false) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  console.debug('SpeechRecognition support:', !!SpeechRecognition, 'window.SpeechRecognition=', !!window.SpeechRecognition, 'window.webkitSpeechRecognition=', !!window.webkitSpeechRecognition);
  if (!SpeechRecognition) {
    const errorText = 'Trình duyệt của bạn không hỗ trợ SpeechRecognition. Hãy dùng Chrome/Edge mới nhất hoặc mở trên localhost/HTTPS.';
    if (speechMode === 'speaking') {
      speakingFeedback.textContent = errorText;
      speakingFeedback.style.color = '#ff6b6b';
    } else if (speechMode === 'pronunciation') {
      pronunciationFeedback.textContent = errorText;
      pronunciationFeedback.style.color = '#ff6b6b';
    }
    return false;
  }
  if (!recognition || forceReset) {
    if (recognition && recognition.abort) {
      recognition.abort();
    }
    recognition = new SpeechRecognition();
    recognition.lang = 'fr-FR';
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;
    recognition.continuous = false;
  }

  recognition.addEventListener('result', event => {
    const text = event.results[0][0].transcript;
    recognitionHasResult = true;
    if (speechMode === 'speaking') {
      const task = speakingTasks[activeSpeaking];
      const normalizedText = normalizeFrenchText(text);
      const normalizedExpected = normalizeFrenchText(task.expected);
      const score = similarityScore(normalizedText, normalizedExpected);
      speakingRecognized.textContent = `Bạn nói: ${text}`;
      speakingFeedback.textContent = normalizedText === normalizedExpected || score >= 0.7
        ? 'Bạn đã nói rất tốt!'
        : `Bạn nói: ${text}. Câu đúng: ${task.expected}`;
      speakingFeedback.style.color = score >= 0.7 ? '#22c55e' : '#ff6b6b';
    } else if (speechMode === 'pronunciation') {
      const task = pronunciationTasks[activePronunciation];
      const normalizedText = normalizeFrenchText(text);
      const normalizedExpected = normalizeFrenchText(task.phrase);
      const score = similarityScore(normalizedText, normalizedExpected);
      pronunciationRecognized.textContent = `Bạn nói: ${text}`;
      pronunciationFeedback.textContent = getPronunciationAdvice(text, task.phrase);
      pronunciationFeedback.style.color = score >= 0.7 ? '#22c55e' : '#ff6b6b';
      if (score < 0.7) {
        pronunciationFeedback.textContent += ' Hãy lặp lại và chú ý nhấn âm.';
      }
    }
    isRecognizing = false;
  });

  recognition.addEventListener('nomatch', () => {
    if (speechMode === 'speaking') {
      speakingFeedback.textContent = 'Không khớp giọng nói. Hãy thử lại với cách phát âm rõ ràng hơn.';
      speakingFeedback.style.color = '#ff6b6b';
    } else if (speechMode === 'pronunciation') {
      pronunciationFeedback.textContent = 'Không khớp giọng nói. Hãy thử lại với cách phát âm rõ ràng hơn.';
      pronunciationFeedback.style.color = '#ff6b6b';
    }
  });

  recognition.addEventListener('start', () => {
    console.debug('SpeechRecognition bắt đầu');
  });

  recognition.addEventListener('speechstart', () => {
    console.debug('Người dùng đang nói');
  });

  recognition.addEventListener('soundstart', () => {
    console.debug('Âm thanh được phát hiện');
  });

  recognition.addEventListener('end', () => {
    console.debug('SpeechRecognition kết thúc; isRecognizing=', isRecognizing, 'hasResult=', recognitionHasResult, 'stopRequested=', recognitionStopRequested);
    if (recognitionStopRequested) {
      recognitionStopRequested = false;
      if (!recognitionHasResult) {
        if (speechMode === 'speaking') {
          speakingFeedback.textContent = 'Không nhận diện được giọng nói. Hãy thử lại và nói rõ hơn.';
          speakingFeedback.style.color = '#ff6b6b';
        } else if (speechMode === 'pronunciation') {
          pronunciationFeedback.textContent = 'Không nhận diện được giọng nói. Hãy thử lại và nói rõ hơn.';
          pronunciationFeedback.style.color = '#ff6b6b';
        }
      }
      recognitionHasResult = false;
      isRecognizing = false;
      return;
    }
    isRecognizing = false;
  });

  recognition.addEventListener('error', event => {
    if (recognitionStopRequested) {
      recognitionStopRequested = false;
      recognitionHasResult = false;
      isRecognizing = false;
      return;
    }
    let errorMessage = `Nhận diện giọng nói dừng do lỗi: ${event.error}. Hãy thử lại.`;
    if (event.error === 'no-speech') {
      errorMessage = 'Không bắt được giọng nói. Hãy thử nói rõ hơn, kiểm tra micro, và đảm bảo bạn đang mở trang trên HTTPS hoặc localhost/127.0.0.1.';
    }
    if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
      errorMessage = 'Micro chưa được cấp phép hoặc trình duyệt chặn. Kiểm tra quyền micro và làm mới trang.';
    }
    if (speechMode === 'speaking') {
      speakingFeedback.textContent = errorMessage;
      speakingFeedback.style.color = '#ff6b6b';
    } else if (speechMode === 'pronunciation') {
      pronunciationFeedback.textContent = errorMessage;
      pronunciationFeedback.style.color = '#ff6b6b';
    }
    isRecognizing = false;
    recognition = null;
  });

  return true;
}

function speak(text) {
  if (!window.speechSynthesis) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'fr-FR';
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
}

function setTheme(isDark) {
  document.documentElement.classList.toggle('dark', isDark);
  localStorage.setItem('frenchCoachTheme', isDark ? 'dark' : 'light');
  queueCloudSync();
}

function setBackupStatus(message, isError = false) {
  if (!backupStatus) return;
  backupStatus.textContent = message;
  backupStatus.style.color = isError ? '#ff6b6b' : 'var(--muted)';
}

function setAuthStatus(message, isError = false) {
  if (!authStatus) return;
  authStatus.textContent = message;
  authStatus.style.color = isError ? '#ff6b6b' : 'var(--muted)';
}

function showToast(message, isError = false) {
  if (!toastContainer) return;
  const toast = document.createElement('div');
  toast.className = `toast${isError ? ' error' : ''}`;
  toast.textContent = message;
  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3200);
}

function evaluatePasswordStrength(password) {
  let score = 0;
  if (!password) return { score: 0, label: 'chưa nhập' };
  if (password.length >= 6) score += 1;
  if (password.length >= 8) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;
  const labels = ['rất yếu', 'yếu', 'trung bình', 'khá', 'mạnh'];
  return { score, label: labels[Math.max(0, score - 1)] || 'rất yếu' };
}

function updatePasswordStrengthUI() {
  if (!passwordStrengthBar || !passwordStrengthText || !authPassword) return;
  const { score, label } = evaluatePasswordStrength(authPassword.value);
  const width = Math.min(100, score * 20);
  passwordStrengthBar.style.width = `${width}%`;
  if (score <= 1) passwordStrengthBar.style.background = '#ef4444';
  else if (score <= 3) passwordStrengthBar.style.background = '#f59e0b';
  else passwordStrengthBar.style.background = '#22c55e';
  passwordStrengthText.textContent = `Độ mạnh mật khẩu: ${label}`;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getAuthInputs() {
  return {
    email: authEmail ? authEmail.value.trim() : '',
    password: authPassword ? authPassword.value : ''
  };
}

function setAuthLoading(isLoading) {
  authLoading = isLoading;
  if (registerBtn) registerBtn.disabled = isLoading || Boolean(currentUser);
  if (loginBtn) loginBtn.disabled = isLoading || Boolean(currentUser);
  if (logoutBtn) logoutBtn.disabled = isLoading || !currentUser;
  if (syncNowBtn) syncNowBtn.disabled = isLoading || !currentUser || !firebaseReady;
  if (resetPasswordBtn) resetPasswordBtn.disabled = isLoading || !firebaseReady;
  if (authEmail) authEmail.disabled = isLoading;
  if (authPassword) authPassword.disabled = isLoading;
}

function mapAuthError(error) {
  const code = error && error.code ? error.code : '';
  if (code === 'auth/email-already-in-use') return 'Email đã tồn tại, hãy đăng nhập hoặc dùng email khác.';
  if (code === 'auth/invalid-email') return 'Email không hợp lệ.';
  if (code === 'auth/weak-password') return 'Mật khẩu yếu, cần ít nhất 6 ký tự.';
  if (code === 'auth/user-not-found' || code === 'auth/wrong-password' || code === 'auth/invalid-credential') return 'Sai email hoặc mật khẩu.';
  if (code === 'auth/too-many-requests') return 'Bạn thử quá nhiều lần, vui lòng đợi một chút.';
  return 'Có lỗi xảy ra, vui lòng thử lại.';
}

function isFirebaseConfigured() {
  return !Object.values(firebaseConfig).some(value => value.startsWith('PASTE_FIREBASE_'));
}

function updateAuthButtons() {
  const signedIn = Boolean(currentUser);
  if (registerBtn) registerBtn.disabled = authLoading || signedIn;
  if (loginBtn) loginBtn.disabled = authLoading || signedIn;
  if (logoutBtn) logoutBtn.disabled = authLoading || !signedIn;
  if (syncNowBtn) syncNowBtn.disabled = authLoading || !signedIn || !firebaseReady;
  if (resetPasswordBtn) resetPasswordBtn.disabled = authLoading || !firebaseReady;
  if (togglePasswordBtn) togglePasswordBtn.disabled = authLoading;
}

function getCloudDocRef() {
  if (!db || !currentUser) return null;
  return db.collection('userProgress').doc(currentUser.uid);
}

async function syncToCloudNow(options = {}) {
  const { manual = false } = options;
  if (!firebaseReady || !currentUser || cloudSyncInProgress) return;
  const ref = getCloudDocRef();
  if (!ref) return;
  cloudSyncInProgress = true;
  try {
    const payload = createBackupPayload();
    await ref.set({
      version: payload.version,
      updatedAt: new Date().toISOString(),
      data: payload.data
    }, { merge: true });
    setAuthStatus(`Đã đồng bộ lúc ${new Date().toLocaleTimeString('vi-VN')}.`);
    if (manual) showToast('Đồng bộ thành công.');
  } catch {
    setAuthStatus('Đồng bộ thất bại. Kiểm tra cấu hình Firebase hoặc mạng.', true);
    if (manual) showToast('Đồng bộ thất bại.', true);
  } finally {
    cloudSyncInProgress = false;
  }
}

function queueCloudSync() {
  if (suppressCloudSync || !firebaseReady || !currentUser) return;
  clearTimeout(cloudSyncDebounce);
  cloudSyncDebounce = setTimeout(syncToCloudNow, 1000);
}

async function pullCloudData() {
  if (!firebaseReady || !currentUser) return;
  const ref = getCloudDocRef();
  if (!ref) return;
  try {
    const snap = await ref.get();
    if (!snap.exists) {
      setAuthStatus('Đăng nhập thành công. Chưa có dữ liệu cloud, hệ thống sẽ tạo khi bạn học.');
      updateAuthButtons();
      return;
    }
    const cloudPayload = snap.data();
    suppressCloudSync = true;
    applyBackupData({ data: cloudPayload.data || {} });
    suppressCloudSync = false;
    setAuthStatus('Đã tải tiến độ từ cloud thành công.');
  } catch {
    suppressCloudSync = false;
    setAuthStatus('Không tải dữ liệu cloud được. Vui lòng thử lại.', true);
  }
  updateAuthButtons();
}

function initFirebaseSync() {
  if (!window.firebase) {
    setAuthStatus('Không tải được Firebase SDK.', true);
    return;
  }
  if (!isFirebaseConfigured()) {
    setAuthStatus('Cần điền firebaseConfig trong app.js để bật đồng bộ tài khoản.', true);
    updateAuthButtons();
    return;
  }
  try {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    auth = firebase.auth();
    db = firebase.firestore();
    firebaseReady = true;

    auth.onAuthStateChanged(async user => {
      currentUser = user || null;
      if (currentUser) {
        if (authEmail && currentUser.email) authEmail.value = currentUser.email;
        if (authPassword) authPassword.value = '';
        setAuthStatus(`Đã đăng nhập: ${currentUser.email}. Đang đồng bộ...`);
        updateAuthButtons();
        await pullCloudData();
      } else {
        setAuthStatus('Chưa đăng nhập.');
        updateAuthButtons();
      }
    });
  } catch {
    setAuthStatus('Khởi tạo Firebase thất bại. Kiểm tra firebaseConfig.', true);
  }
}

async function registerWithEmail() {
  if (!firebaseReady || !auth || authLoading) return;
  const { email, password } = getAuthInputs();
  if (!email || !isValidEmail(email)) {
    setAuthStatus('Email chưa đúng định dạng.', true);
    return;
  }
  if (!password || password.length < 6) {
    setAuthStatus('Mật khẩu cần ít nhất 6 ký tự.', true);
    return;
  }
  setAuthLoading(true);
  try {
    await auth.createUserWithEmailAndPassword(email, password);
    setAuthStatus('Đăng ký thành công. Đang đồng bộ dữ liệu...');
    showToast('Đăng ký thành công.');
    await syncToCloudNow({ manual: true });
  } catch (error) {
    setAuthStatus(mapAuthError(error), true);
    showToast(mapAuthError(error), true);
  } finally {
    setAuthLoading(false);
    updateAuthButtons();
  }
}

async function loginWithEmail() {
  if (!firebaseReady || !auth || authLoading) return;
  const { email, password } = getAuthInputs();
  if (!email || !isValidEmail(email)) {
    setAuthStatus('Email chưa đúng định dạng.', true);
    return;
  }
  if (!password) {
    setAuthStatus('Vui lòng nhập mật khẩu.', true);
    return;
  }
  setAuthLoading(true);
  try {
    await auth.signInWithEmailAndPassword(email, password);
    setAuthStatus('Đăng nhập thành công.');
    showToast('Đăng nhập thành công.');
  } catch (error) {
    setAuthStatus(mapAuthError(error), true);
    showToast(mapAuthError(error), true);
  } finally {
    setAuthLoading(false);
    updateAuthButtons();
  }
}

async function logoutAccount() {
  if (!firebaseReady || !auth || authLoading) return;
  setAuthLoading(true);
  try {
    await auth.signOut();
    setAuthStatus('Đã đăng xuất.');
    showToast('Đã đăng xuất.');
  } catch (error) {
    setAuthStatus(mapAuthError(error), true);
    showToast(mapAuthError(error), true);
  } finally {
    setAuthLoading(false);
    updateAuthButtons();
  }
}

async function sendPasswordReset() {
  if (!firebaseReady || !auth || authLoading) return;
  const { email } = getAuthInputs();
  if (!email || !isValidEmail(email)) {
    setAuthStatus('Nhập email hợp lệ để nhận link đặt lại mật khẩu.', true);
    return;
  }
  setAuthLoading(true);
  try {
    await auth.sendPasswordResetEmail(email);
    setAuthStatus('Đã gửi email đặt lại mật khẩu. Hãy kiểm tra hộp thư.');
    showToast('Đã gửi email đặt lại mật khẩu.');
  } catch (error) {
    setAuthStatus(mapAuthError(error), true);
    showToast(mapAuthError(error), true);
  } finally {
    setAuthLoading(false);
    updateAuthButtons();
  }
}

function createBackupPayload() {
  return {
    version: 1,
    exportedAt: new Date().toISOString(),
    data: {
      frenchCoachStats: readStorage('frenchCoachStats', null),
      frenchCoachFavorites: readStorage('frenchCoachFavorites', []),
      frenchCoachHistory: readStorage('frenchCoachHistory', []),
      frenchCoachGrammarRead: readStorage('frenchCoachGrammarRead', []),
      frenchCoachRoadmap: readStorage('frenchCoachRoadmap', {}),
      frenchCoachDailyGoal: readStorage('frenchCoachDailyGoal', null),
      frenchCoachTheme: localStorage.getItem('frenchCoachTheme') || 'light',
      frenchCoachUi: {
        selectedLevel,
        selectedTopic,
        quizMode,
        quizVocabSelectedLevel,
        quizVocabSelectedTopic,
        quizGrammarSelectedLevel,
        quizGrammarSelectedTopic,
        grammarSelectedLevel,
        grammarSelectedTag,
        grammarSelectedStatus,
        onlyFavorites
      }
    }
  };
}

function downloadBackupFile() {
  try {
    const payload = createBackupPayload();
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const stamp = new Date().toISOString().slice(0, 10);
    const link = document.createElement('a');
    link.href = url;
    link.download = `frenchcoach-backup-${stamp}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setBackupStatus('Xuất backup thành công. Hãy chép file này sang máy khác để nhập.');
  } catch {
    setBackupStatus('Xuất backup thất bại. Vui lòng thử lại.', true);
  }
}

function applyBackupData(payload) {
  if (!payload || typeof payload !== 'object' || !payload.data) {
    throw new Error('INVALID_BACKUP');
  }
  const { data } = payload;

  if (data.frenchCoachStats) {
    localStorage.setItem('frenchCoachStats', JSON.stringify(data.frenchCoachStats));
  }
  if (Array.isArray(data.frenchCoachFavorites)) {
    localStorage.setItem('frenchCoachFavorites', JSON.stringify(data.frenchCoachFavorites));
  }
  if (Array.isArray(data.frenchCoachHistory)) {
    localStorage.setItem('frenchCoachHistory', JSON.stringify(data.frenchCoachHistory));
  }
  if (Array.isArray(data.frenchCoachGrammarRead)) {
    localStorage.setItem('frenchCoachGrammarRead', JSON.stringify(data.frenchCoachGrammarRead));
  }
  if (data.frenchCoachRoadmap && typeof data.frenchCoachRoadmap === 'object') {
    localStorage.setItem('frenchCoachRoadmap', JSON.stringify(data.frenchCoachRoadmap));
  }
  if (data.frenchCoachDailyGoal && typeof data.frenchCoachDailyGoal === 'object') {
    localStorage.setItem('frenchCoachDailyGoal', JSON.stringify(data.frenchCoachDailyGoal));
  }
  if (typeof data.frenchCoachTheme === 'string') {
    localStorage.setItem('frenchCoachTheme', data.frenchCoachTheme);
  }

  if (data.frenchCoachUi && typeof data.frenchCoachUi === 'object') {
    selectedLevel = data.frenchCoachUi.selectedLevel || 'all';
    selectedTopic = data.frenchCoachUi.selectedTopic || 'all';
    quizMode = data.frenchCoachUi.quizMode || 'vocab';
    quizVocabSelectedLevel = data.frenchCoachUi.quizVocabSelectedLevel || 'all';
    quizVocabSelectedTopic = data.frenchCoachUi.quizVocabSelectedTopic || 'all';
    quizGrammarSelectedLevel = data.frenchCoachUi.quizGrammarSelectedLevel || 'all';
    quizGrammarSelectedTopic = data.frenchCoachUi.quizGrammarSelectedTopic || 'all';
    grammarSelectedLevel = data.frenchCoachUi.grammarSelectedLevel || 'all';
    grammarSelectedTag = data.frenchCoachUi.grammarSelectedTag || 'all';
    grammarSelectedStatus = data.frenchCoachUi.grammarSelectedStatus || 'all';
    onlyFavorites = Boolean(data.frenchCoachUi.onlyFavorites);
  }

  loadFavorites();
  loadHistory();
  loadGrammarRead();
  loadRoadmap();
  loadDailyGoal();
  renderTopicButtons();
  renderGrammarFilters();
  renderQuizFilters();
  renderVocabList();
  renderGrammar();
  renderHistory();
  renderRoadmap();
  renderDailyGoal();
  loadTheme();
  updateStats();

  levelButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.level === selectedLevel);
  });
  favoriteFilter.classList.toggle('favorite-active', onlyFavorites);
  favoriteFilter.textContent = onlyFavorites ? 'Bỏ lọc' : 'Chỉ yêu thích';

  // Lưu lại UI prefs để giữ trạng thái qua lần reload tiếp theo
  saveUiPreferences();
}

function importBackupFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const payload = JSON.parse(reader.result);
      applyBackupData(payload);
      setBackupStatus('Nhập backup thành công. Dữ liệu học đã được khôi phục.');
    } catch {
      setBackupStatus('File backup không hợp lệ hoặc đã hỏng.', true);
    } finally {
      if (importBackupInput) importBackupInput.value = '';
    }
  };
  reader.onerror = () => {
    setBackupStatus('Không thể đọc file backup. Vui lòng thử lại.', true);
    if (importBackupInput) importBackupInput.value = '';
  };
  reader.readAsText(file, 'utf-8');
}

function loadTheme() {
  const stored = localStorage.getItem('frenchCoachTheme');
  setTheme(stored === 'dark');
}

function startQuizSession() {
  const questions = quizMode === 'grammar'
    ? buildQuizQuestionsFromGrammar({ count: 10 })
    : buildQuizQuestionsFromVocab({ count: 10 });
  if (!questions || !questions.length) {
    showToast('Không đủ dữ liệu cho quiz theo bộ lọc hiện tại. Hãy chọn “Tất cả” hoặc đổi bộ lọc.', true);
    return;
  }
  quizState = { current: 0, score: 0, total: questions.length, active: true, questions };
  showQuizQuestion();
}

function showQuizQuestion() {
  if (!quizState.active) return;
  const question = quizState.questions[quizState.current];
  quizQuestion.textContent = question.question;
  quizAnswers.innerHTML = question.choices.map(choice => `
    <button class="pill answer-choice">${choice}</button>
  `).join('');
  quizStatus.textContent = `Điểm: ${quizState.score} / ${quizState.current}`;
  nextQuestion.disabled = true;
}

function evaluateQuizChoice(answer) {
  const currentQuestion = quizState.questions[quizState.current];
  const correct = answer === currentQuestion.answer;
  if (correct) quizState.score += 1;
  quizState.current += 1;
  if (quizState.current >= quizState.total) {
    quizState.active = false;
    quizQuestion.textContent = `Quiz hoàn thành! Bạn được ${quizState.score}/${quizState.total}.`;
    quizAnswers.innerHTML = '';
    quizStatus.textContent = 'Hoàn thành';
    nextQuestion.disabled = true;
    saveStats({ quizScore: quizState.score });
    recordActivity(`Hoàn thành quiz: ${quizState.score}/${quizState.total}`);
  } else {
    showQuizQuestion();
  }
}

menuButtons.forEach(button => {
  button.addEventListener('click', () => updateSection(button.dataset.section));
});

newFlashcard.addEventListener('click', () => {
  activeFlashcard = Math.floor(Math.random() * vocabularies.length);
  renderFlashcard();
});

playPronunciation.addEventListener('click', () => {
  const item = vocabularies[activeFlashcard];
  speak(item.word);
});

showExample.addEventListener('click', () => {
  const item = vocabularies[activeFlashcard];
  flashcardDefinition.textContent = `${item.meaning} — Ví dụ: ${item.example}`;
});

practiceTabs.forEach(tab => {
  tab.addEventListener('click', () => switchPracticeTab(tab.dataset.tab));
});

startSpeaking.addEventListener('click', () => {
  speechMode = 'speaking';
  updateSpeechHints();
  if (!isSpeechFeatureLikelyToWork()) {
    speakingFeedback.textContent = 'Môi trường hiện tại có thể không hỗ trợ SpeechRecognition. Hãy chuyển sang HTTPS hoặc localhost/127.0.0.1 rồi thử lại.';
    speakingFeedback.style.color = '#ff6b6b';
    return;
  }
  setupSpeechRecognition(true);
  if (beginSpeechRecognition()) {
    speakingFeedback.textContent = 'Đang nghe bạn nói...';
    speakingFeedback.style.color = '#3f79ff';
  }
});

nextSpeaking.addEventListener('click', () => {
  activeSpeaking = (activeSpeaking + 1) % speakingTasks.length;
  renderSpeaking();
});

playPronunciationPhrase.addEventListener('click', () => {
  const task = pronunciationTasks[activePronunciation];
  speak(task.phrase);
});

startPronunciation.addEventListener('click', () => {
  speechMode = 'pronunciation';
  updateSpeechHints();
  if (!isSpeechFeatureLikelyToWork()) {
    pronunciationFeedback.textContent = 'Môi trường hiện tại có thể không hỗ trợ SpeechRecognition. Hãy chuyển sang HTTPS hoặc localhost/127.0.0.1 rồi thử lại.';
    pronunciationFeedback.style.color = '#ff6b6b';
    return;
  }
  setupSpeechRecognition(true);
  if (beginSpeechRecognition()) {
    pronunciationFeedback.textContent = 'Đang nghe phát âm của bạn...';
    pronunciationFeedback.style.color = '#3f79ff';
  }
});

nextPronunciation.addEventListener('click', () => {
  activePronunciation = (activePronunciation + 1) % pronunciationTasks.length;
  renderPronunciation();
});

toggleDialogueTranslation.addEventListener('click', () => {
  dialogueTranslationVisible = !dialogueTranslationVisible;
  renderDialogue();
});

nextDialogue.addEventListener('click', () => {
  activeDialogue = (activeDialogue + 1) % dialogueTasks.length;
  renderDialogue();
});

vocabList.addEventListener('click', event => {
  if (event.target.matches('.favorite-button')) {
    const word = event.target.dataset.word;
    toggleFavoriteWord(word);
  }
});

grammarSearch.addEventListener('input', event => {
  clearTimeout(grammarSearchDebounce);
  grammarSearchDebounce = setTimeout(() => {
    grammarQuery = event.target.value;
    renderGrammar();
  }, 150);
});

if (grammarList) {
  grammarList.addEventListener('click', event => {
    if (event.target.matches('.grammar-mark')) {
      toggleGrammarRead(event.target.dataset.grammar);
      return;
    }
    if (event.target.matches('.grammar-toggle')) {
      const id = event.target.dataset.grammarToggle;
      expandedGrammarId = expandedGrammarId === id ? null : id;
      renderGrammar();
    }
  });
}

if (grammarLevelButtons) {
  grammarLevelButtons.addEventListener('click', event => {
    if (!event.target.matches('.grammar-level-button')) return;
    grammarSelectedLevel = event.target.dataset.grammarLevel || 'all';
    renderGrammarFilters();
    renderGrammar();
    saveUiPreferences();
  });
}

if (grammarTagButtons) {
  grammarTagButtons.addEventListener('click', event => {
    if (!event.target.matches('.grammar-tag-button')) return;
    grammarSelectedTag = event.target.dataset.grammarTag || 'all';
    renderGrammarFilters();
    renderGrammar();
    saveUiPreferences();
  });
}

if (grammarStatusButtons) {
  grammarStatusButtons.addEventListener('click', event => {
    if (!event.target.matches('.grammar-status-button')) return;
    grammarSelectedStatus = event.target.dataset.grammarStatus || 'all';
    renderGrammarFilters();
    renderGrammar();
    saveUiPreferences();
  });
}

vocabSearch.addEventListener('input', event => {
  clearTimeout(vocabSearchDebounce);
  vocabSearchDebounce = setTimeout(() => {
    searchQuery = event.target.value.trim();
    vocabVisibleLimit = 80;
    renderVocabList();
  }, 150);
});

clearSearch.addEventListener('click', () => {
  searchQuery = '';
  vocabSearch.value = '';
  vocabVisibleLimit = 80;
  renderVocabList();
});

levelButtons.forEach(button => {
  button.addEventListener('click', () => {
    selectedLevel = button.dataset.level;
    vocabVisibleLimit = 80;
    levelButtons.forEach(btn => btn.classList.toggle('active', btn === button));
    renderVocabList();
    saveUiPreferences();
  });
});

topicButtons.addEventListener('click', event => {
  if (!event.target.matches('.topic-button')) return;
  selectedTopic = event.target.dataset.topic;
  vocabVisibleLimit = 80;
  renderTopicButtons();
  renderVocabList();
  saveUiPreferences();
});

if (quizModeVocab && quizModeGrammar) {
  [quizModeVocab, quizModeGrammar].forEach(button => {
    button.addEventListener('click', () => {
      quizMode = button.dataset.quizMode || 'vocab';
      renderQuizFilters();
      saveUiPreferences();
    });
  });
}

if (quizLevelButtons) {
  quizLevelButtons.addEventListener('click', event => {
    if (!event.target.matches('.quiz-level-button')) return;
    const level = event.target.dataset.quizLevel || 'all';
    if (quizMode === 'grammar') quizGrammarSelectedLevel = level;
    else quizVocabSelectedLevel = level;
    renderQuizFilters();
    saveUiPreferences();
  });
}

if (quizTopicButtons) {
  quizTopicButtons.addEventListener('click', event => {
    if (!event.target.matches('.quiz-topic-button')) return;
    const topic = event.target.dataset.quizTopic || 'all';
    if (quizMode === 'grammar') quizGrammarSelectedTopic = topic;
    else quizVocabSelectedTopic = topic;
    renderQuizFilters();
    saveUiPreferences();
  });
}

checkAnswer.addEventListener('click', () => {
  const answer = practiceAnswer.value.trim();
  const task = practiceTasks[activePractice];
  if (!answer) {
    practiceFeedback.textContent = 'Hãy nhập câu bạn đã viết.';
    practiceFeedback.style.color = '#ff6b6b';
    return;
  }
  if (answer.toLowerCase() === task.answer.toLowerCase()) {
    practiceFeedback.textContent = 'Chính xác!';
    practiceFeedback.style.color = '#22c55e';
    maybeUpdateStreak();
  } else {
    practiceFeedback.textContent = `Sai rồi. Gợi ý: ${task.answer}`;
    practiceFeedback.style.color = '#ff6b6b';
  }
});

nextPrompt.addEventListener('click', () => {
  activePractice = (activePractice + 1) % practiceTasks.length;
  renderPractice();
});

refreshChallenge.addEventListener('click', () => {
  currentDailyChallenge = (currentDailyChallenge + 1) % dailyChallenges.length;
  renderDashboardChallenge();
});

if (completeDailyGoal) {
  completeDailyGoal.addEventListener('click', completeTodayGoal);
}

favoriteFilter.addEventListener('click', () => {
  onlyFavorites = !onlyFavorites;
  vocabVisibleLimit = 80;
  favoriteFilter.classList.toggle('favorite-active', onlyFavorites);
  favoriteFilter.textContent = onlyFavorites ? 'Bỏ lọc' : 'Chỉ yêu thích';
  renderVocabList();
  saveUiPreferences();
});

if (loadMoreVocab) {
  loadMoreVocab.addEventListener('click', () => {
    vocabVisibleLimit += 80;
    renderVocabList();
  });
}

if (exportBackup) {
  exportBackup.addEventListener('click', downloadBackupFile);
}

if (importBackupInput) {
  importBackupInput.addEventListener('change', event => {
    const file = event.target.files && event.target.files[0];
    importBackupFile(file);
  });
}

if (registerBtn) {
  registerBtn.addEventListener('click', registerWithEmail);
}

if (loginBtn) {
  loginBtn.addEventListener('click', loginWithEmail);
}

if (resetPasswordBtn) {
  resetPasswordBtn.addEventListener('click', sendPasswordReset);
}

if (logoutBtn) {
  logoutBtn.addEventListener('click', logoutAccount);
}

if (syncNowBtn) {
  syncNowBtn.addEventListener('click', () => syncToCloudNow({ manual: true }));
}

if (togglePasswordBtn) {
  togglePasswordBtn.addEventListener('click', () => {
    if (!authPassword) return;
    const isHidden = authPassword.type === 'password';
    authPassword.type = isHidden ? 'text' : 'password';
    togglePasswordBtn.textContent = isHidden ? 'Ẩn' : 'Hiện';
  });
}

if (authPassword) {
  authPassword.addEventListener('input', updatePasswordStrengthUI);
  authPassword.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      loginWithEmail();
    }
  });
}

if (authEmail) {
  authEmail.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      loginWithEmail();
    }
  });
}

speakDialogueLine.addEventListener('click', () => {
  const task = dialogueTasks[activeDialogue];
  const text = task.lines.map(line => line.fr).join(' ');
  speak(text);
});

startQuiz.addEventListener('click', startQuizSession);

quizAnswers.addEventListener('click', event => {
  if (event.target.matches('.answer-choice')) {
    evaluateQuizChoice(event.target.textContent);
  }
});

nextQuestion.addEventListener('click', () => {
  if (quizState.active) showQuizQuestion();
});

resetRoadmap.addEventListener('click', clearRoadmap);
roadmapList.addEventListener('click', event => {
  if (event.target.matches('.roadmap-toggle')) {
    toggleRoadmapItem(event.target.dataset.roadmap);
  }
});

themeToggle.addEventListener('click', () => setTheme(!document.documentElement.classList.contains('dark')));
themeToggleBottom.addEventListener('click', () => setTheme(!document.documentElement.classList.contains('dark')));

function init() {
  loadUiPreferences();
  loadFavorites();
  loadHistory();
  loadGrammarRead();
  loadRoadmap();
  loadDailyGoal();
  renderFlashcard();
  renderTopicButtons();
  renderGrammarFilters();
  renderQuizFilters();
  renderVocabList();
  renderGrammar();
  renderPractice();
  renderSpeaking();
  renderPronunciation();
  renderDialogue();
  renderDashboardChallenge();
  renderDailyGoal();
  switchPracticeTab('translate');
  renderHistory();
  renderRoadmap();
  setupSpeechRecognition();
  loadTheme();
  updateStats();
  maybeUpdateStreak();
  initFirebaseSync();
  updateAuthButtons();
  updatePasswordStrengthUI();
}

init();
